import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson, FeatureCollection } from './map.modul';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators/map";

@Injectable({
  providedIn: "root"
})
export class MapService {
  markers: AngularFireList<any>;
  keys: Observable<any[]>;
  private markerPath = "/marker";

  constructor(private db: AngularFireDatabase) {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(
      environment.mapbox.accessToken
    );
    this.markers = db.list(this.markerPath);
    this.keys = this.markers
      .snapshotChanges()
      .pipe(map(changes =>
        changes.map(c => ({ key: c.key }))));
  }

  getMarker() {
    return this.markers;
  }

  getKeys() {
    return this.keys;
  }

  // getMarker(): AngularFireList<any> {
  //   return this.db.list(this.markerPath);
  // }

  createMarker(data: GeoJson) {
    return this.db.list(this.markerPath).push(data);
  }

  removeMarker(key: string) {
    return this.db.object(this.markerPath + "/" + key).remove();
  }

  setMarkerGeoJson(coordinates) {
    return new GeoJson(coordinates);
  }

  private handleError(error) {
    console.log(error);
  }
}
