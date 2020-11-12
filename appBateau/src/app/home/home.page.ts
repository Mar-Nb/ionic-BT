import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 800,
    autoplay: true,
    loop: true
  };

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slider: any;

  constructor() {
    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false,
      slideItems: [
        {
          titre: "Produits & Promotions",
          description: "Lorem ipsum...\n\n",
          route: "/product-list"
        },
        {
          titre: "Nos bateaux",
          description: "Lorem ipsum...\n\n",
          route: "/introuvable"
        },
        {
          titre: "Nos restaurants partenaires",
          description: "Lorem ipsum...\n\n",
          route: "/restaurant"
        },
        {
          titre: "Quelques idées de recettes",
          description: "Lorem ipsum...\n\n",
          route: "/recette"
        },
        {
          titre: "Nous contacter",
          description: "Lorem ipsum...\n\n",
          route: "/contact"
        }
      ]
    }
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  // Call methods to check if slide is first or last to enable/disable navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
}
