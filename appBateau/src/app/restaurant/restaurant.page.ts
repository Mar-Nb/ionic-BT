import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormRestaurantComponent } from './form-restaurant/form-restaurant.component';
import { RestaurantService } from '../services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  listeRestaurant: any[];
  constructor(private restoServ: RestaurantService, private router: Router, private modalC: ModalController) { }

  ngOnInit() {
    this.restoServ.getRestaurants().then(
      (response) => {
        this.listeRestaurant = response.val();

        this.restoServ.getImagesDatabase().subscribe((images) => {
          images.forEach((image) => {
            this.restoServ.getImagesStorage(image).subscribe(imageUrl => {
              let nomImage = image.payload.exportVal().nom;
              this.listeRestaurant.forEach(element => {
                if (element.nom == nomImage) { element["url"] = imageUrl; }
              });
            });
          });
        });

        console.log("restaurants", this.listeRestaurant);
      },
      (error) => { console.log("Erreur !", error) }
    );
  }

  ouvrirPageDetail(resto) {
    let navExtra: NavigationExtras = {
      state: {
        restaurant: resto
      }
    };

    this.router.navigate(['restaurant', 'detail-restaurant'], navExtra);
  }

  async ouvrirFormulaireRestaurant() {
    const modal = await this.modalC.create({
      component: FormRestaurantComponent,
      componentProps: {
        'controller': this.modalC
      }
    });

    return await modal.present();
  }
}
