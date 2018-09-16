import { Component, OnInit, OnDestroy } from "@angular/core";
import { Map } from 'mapbox-gl';
import { MapService } from '../map.service';
import { GeoJson, FeatureCollection } from '../map.modul';
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit, OnDestroy {
  // Authentication
  userIsAuthenticated = false;
  userId: string;
  private authStatusSub: Subscription;
  // default settings Mapbox
  map: Map;
  lat = 47.424778;
  lng = 12.849172;
  coordinates = [this.lng, this.lat];
  startZoom = 2;
  message = "Dolce Vita";
  testGeoJsonUrl = "https://wanderdrone.appspot.com/";
  // Mapbox data source
  sourceMarkers: any;
  sourceCords: any;
  dolceMarker: any;

  coordinatesFb;
  trackerMarker;
  sourceTracker;

  addedSource = false;
  // Angularfire CRUD
  markers: any;
  keys: any;
  lastKey: any;
  firstKey: any;

  constructor(
    private mapService: MapService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
        console.log(this.userIsAuthenticated);
      });
    this.buildMap();
    this.initialiseMap();
  }

  buildMap() {
    this.map = new Map({
      // tslint:disable-next-line:quotemark
      container: "map", // tslint:disable-next-line:quotemark
      style: "mapbox://styles/mapbox/light-v9",
      zoom: this.startZoom,
      center: this.coordinates
    });
  }

  initialiseMap() {
    // Add Marker on Click
    this.map.on("click", event => {
      if (this.userIsAuthenticated) {
        const coordinates = [event.lngLat.lng, event.lngLat.lat];
        const newMarker = new GeoJson(coordinates, {
          message: this.message
        });
        this.mapService.createMarker(newMarker);
      }
    });
    // Get Markers from firebase
    this.markers = this.mapService.getMarker();
    this.dolceMarker = this.mapService.setMarkerGeoJson(this.coordinates);
    // Get Keys from firebase if Authenticated
    if (this.userIsAuthenticated) {
      this.mapService.getKeys().subscribe(data => {
        this.keys = data;
        if (this.keys.length > 0) {
          this.lastKey = this.keys[this.keys.length - 1].key;
          this.firstKey = this.keys[0].key;
        }
      });
    }
    // Add realtime data on map load
    this.map.on("load", () => {
      this.initialiseFirebaseMarkers();
      this.initialisePreSetMarker();
      this.initialiseTracking();
      this.initialiseSimulation();
    });
  }

  initialisePreSetMarker() {
    // Map register source
    this.map.addSource("Dolce", {
      type: "geojson",
      data: this.dolceMarker
    });

    this.map.addLayer({
      id: "Dolce",
      source: "Dolce",
      type: "symbol",
      layout: {
        "text-field": this.message,
        "text-size": 12,
        "icon-image": "rocket-15",
        "text-offset": [0, 1.2]
      },
      paint: {
        "text-color": "#f16624",
        "text-halo-color": "#fff",
        "text-halo-width": 2
      }
    });
  }

  initialiseFirebaseMarkers() {
    // Map register source
    this.map.addSource("firebase", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: []
      }
    });

    // Map get source
    this.sourceMarkers = this.map.getSource("firebase");
    // Subscribe to realtime database and set data source
    this.markers.valueChanges().subscribe(markers => {
      console.log(markers);
      const data = new FeatureCollection(markers);
      this.sourceMarkers.setData(data);
    });

    // Create map layers with marker data
    this.map.addLayer({
      id: "firebase",
      source: "firebase",
      type: "symbol",
      layout: {
        "text-field": "{message}",
        "text-size": 24,
        "text-transform": "uppercase",
        "icon-image": "rocket-15",
        "text-offset": [0, 1.5]
      },
      paint: {
        "text-color": "#f16624",
        "text-halo-color": "#fff",
        "text-halo-width": 2
      }
    });
  }

  initialiseTracking() {
    this.coordinatesFb = this.mapService.getCords();
    this.coordinatesFb.valueChanges().subscribe(cords => {
      if (cords.length > 0) {
        const lastCord = cords[cords.length - 1];
        const coordinates = [lastCord.lng, lastCord.lat];
        this.trackerMarker = this.mapService.setMarkerGeoJson(coordinates);
        console.log(this.trackerMarker);
        if (!this.addedSource) {
          /// Map register source
          this.map.addSource("Tracker", {
            type: "geojson",
            data: this.trackerMarker

          });
          // Map get source
          this.sourceTracker = this.map.getSource("Tracker");
          // Create map layers with realtime data
          this.map.addLayer({
            id: "Tracker",
            source: "Tracker",
            type: "circle",
            paint: {
              "circle-radius": 10,
              "circle-color": "#000000"
            }
          });
          this.addedSource = true;
        }
        this.sourceTracker.setData(this.trackerMarker
      );
      }
    });
  }

  initialiseSimulation() {
    /// Map register source
    this.map.addSource("Point", {
      type: "geojson",
      data: this.testGeoJsonUrl
    });

    // Map get source
    this.sourceCords = this.map.getSource("Point");

    // Update layer
    window.setInterval(() => {
      const data = this.testGeoJsonUrl;
      this.sourceCords.setData(data);
    }, 2000);

    // Create map layers with realtime data
    this.map.addLayer({
      id: "Point",
      source: "Point",
      type: "circle",
      paint: {
        "circle-radius": 10,
        "circle-color": "#007cbf"
      }
    });
  }

  /// Helpers
  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates,
      zoom: 18
    });
  }

  flyOut(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates,
      zoom: 2
    });
  }

  removeMarker(key) {
    this.mapService.removeMarker(key);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
