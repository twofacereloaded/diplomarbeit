import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { MapService } from '../map.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  isLoading = false;
  map: Map;
  lat = 47.424776;
  lng = 12.849164;
  zoom = 2;
  url = 'https://wanderdrone.appspot.com/';


  constructor(private mapService: MapService) {}
  ngOnInit() {
    this.buildMap();
  }

  buildMap() {

    marker = new mapboxgl.Marker();
    this.map = new Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    this.map.on('load', () => {
      window.setInterval( () => {
        this.map.getSource('Point').setData(this.url);
      }, 2000);
      // this.map.getSource('Point').animate(1000);
      // this.map.getSource('Point').setData(this.url);
      this.map.addSource('Point', {
        type: 'geojson',
        data: this.url
      });

      this.map.addLayer({
        id: 'Point',
        source: 'Point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf'
        }
      });
      // Start the animation.

    });
  }

  pointOnCircle(angle) {
    return {
      type: "Point",
      coordinates: [Math.cos(angle) * 20, Math.sin(angle) * 20]
    };
  }

  animateMarker() {
    // Update the data to a new position based on the animation timestamp. The

    this.map.getSource("Point").setData(this.pointOnCircle(20));

    // Request the next frame of the animation.
    requestAnimationFrame(this.animateMarker);
  }

  point() {
    return this.url;
  }
}
