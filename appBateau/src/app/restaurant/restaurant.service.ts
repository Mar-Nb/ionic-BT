import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private firebase: AngularFireDatabase) { }

  getRestaurants() {
    return this.firebase.database.ref("/restaurants").once("value");
  }
}
