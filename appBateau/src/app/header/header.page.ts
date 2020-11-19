import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import firebase from 'firebase';
import {BehaviorSubject} from 'rxjs';
import {CartModalPage} from '../product-list/cart-modal/cart-modal.page';
import {ProductListService} from '../services/product-list-service/product-list.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {


  isAuth: boolean;
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  @Input() location: string;

  constructor(private authService: AuthService, private productListService: ProductListService, private modalCtrl: ModalController) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          this.isAuth = !!user;
        }
    );
    this.cartItemCount = this.productListService.getCartItemCount();
  }
  addToCart() {
    this.animateCSS('tada');
  }
  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd);
    }
    node.addEventListener('animationend', handleAnimationEnd);
  }
}
