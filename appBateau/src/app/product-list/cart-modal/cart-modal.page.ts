import { Component, OnInit } from '@angular/core';
import {ProductListService} from '../../services/product-list-service/product-list.service';
import {AlertController, ModalController} from '@ionic/angular';
import {Product} from '../../model/Product.model';
import {ItemCart} from '../../model/ItemCart';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: ItemCart[] = [];

  constructor(private productListService: ProductListService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.productListService.getCart();
  }
  decreaseCartItem(product, i) {
    this.productListService.decreaseToCard(product, i);
  }

  increaseCartItem(product) {
    this.productListService.addToCard(product, this.cart);
  }

  removeCartItem(product) {
    this.productListService.removeProduct(product);
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
