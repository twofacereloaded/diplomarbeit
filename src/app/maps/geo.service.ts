import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
declare var GeoFire: any;

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([]);

  constructor(private db: AngularFireDatabase) {
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.query.ref);
  }

  setLocation(key: string, coords: Array<number>) {
    this.geoFire.set(key, coords)
      .then(_ => console.log('location updated'))
      .catch(err => console.log(err));
  }

  /// Queries database for nearby locations
  /// Maps results to the hits BehaviorSubject
  getLocations(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    })
      .on('key_entered', (key, location, distance) => {
        const hit = {
          location: location,
          distance: distance
        };

        const currentHits = this.hits.value;
        currentHits.push(hit);
        this.hits.next(currentHits);
      });
  }
}
