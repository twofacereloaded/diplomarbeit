import { Component, OnInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { MapService } from '../map.service';
// import { GeoJson, FeatureCollection } from '../map.modul';
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit, OnDestroy {
  isLoading = false;
  map: Map;
  lat = 50;
  lng = 12.849164;
  coordinates = [this.lng, this.lat];
  zoom = 2;
  url = "https://wanderdrone.appspot.com/";

  markers = this.mapService.setMarkerGeoJson(this.coordinates);
  subscription: any;
  message = "ok cool";

  constructor(private mapService: MapService) {}
  ngOnInit() {
    this.buildMap();
    this.initialiseMap();
  }

  ngOnDestroy() {}

  buildMap() {
    this.map = new Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v9",
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
  }

  initialiseMap() {
    this.map.on("load", () => {
      window.setInterval(() => {
        this.map.getSource("Point").setData(this.url);
      }, 500);

      this.map.addSource("Point", {
        type: "geojson",
        data: this.url
      });

      this.map.addLayer({
        id: "Point",
        source: "Point",
        type: "circle",
        paint: {
          "circle-radius": 10,
          "circle-color": "#007cbf"
        }
      });
    });
  }
}
