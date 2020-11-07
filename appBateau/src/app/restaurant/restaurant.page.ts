import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  listeRestaurant: any[];

  constructor(private restoServ: RestaurantService) { }

  ngOnInit() {
    this.restoServ.getRestaurants().subscribe(
      (response) => { this.listeRestaurant = response; },
      (error) => { console.log("Erreur !", error) });
  }

}
