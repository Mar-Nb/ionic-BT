import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  listeRestaurant: any[];

  constructor(private restoServ: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.restoServ.getRestaurants().subscribe(
      (response) => { this.listeRestaurant = response; },
      (error) => { console.log("Erreur !", error) });
  }

  ouvrirPageDetail(resto) {
    let navExtra: NavigationExtras = {
      state: {
        restaurant: resto
      }
    };

    this.router.navigate(['restaurant', 'detail-restaurant'], navExtra);
  }

}
