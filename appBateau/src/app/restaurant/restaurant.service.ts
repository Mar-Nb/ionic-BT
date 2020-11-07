import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getRestaurants() {
    return this.http.get<any[]>("assets/restaurants.json");
  }
}
