import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../services/product-list-service/product-list.service';
import {AlertController, ModalController} from '@ionic/angular';
import {Product} from '../../model/Product.model';
import {ItemCart} from '../../model/ItemCart';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: ItemCart[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private productListService: ProductListService, private modalCtrl: ModalController, private alertCtrl: AlertController, public storage: Storage) { }

  ngOnInit() {
    this.storage.get('Cart').then((data: ItemCart[]) => {
      this.cart = data;
    });
  }
  decreaseCartItem(product, i) {
    this.productListService.decreaseToCard(product, i);
  }

  increaseCartItem(product) {
    this.productListService.addToCard(product);
  }

  removeCartItem(product, i) {
    this.productListService.removeToCard(product, i);
  }

  getTotal() {
    if (this.cart === null){
      return 0;
    }
    return this.cart.reduce((i, j) => i + j.item.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }
  async checkout() {
    // Perfom PayPal or Stripe checkout process

    const alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your food as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}
