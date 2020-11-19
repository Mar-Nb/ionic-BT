import { Injectable } from '@angular/core';
import {Product} from '../../model/Product.model';
import {BehaviorSubject, Subject} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import {ItemCart} from '../../model/ItemCart';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  pathComplete = 'http://51.255.166.155:1352/tig/products/?format=json';
  path = 'http://51.255.166.155:1352/tig/products/';
  products: Product[];
  productSubject = new Subject<Product[]>();
  cartItems: ItemCart[];
  private cartItemCount = new BehaviorSubject(0);
  constructor(public angularFireDatabase: AngularFireDatabase, public storage: Storage
  ) {
    this.products = [];
  }

  emitProducts(){
    this.productSubject.next(this.products);
  }

  getCart() {
    this.storage.get('Cart').then((data: ItemCart[]) => {
      this.cartItems = data;
    });
    if (this.cartItems === null){
      this.cartItems = [];
    }
    return this.cartItems;
  }

  getCartItemCount() {
    if (this.cartItems != null){
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.cartItems.length; i++){
        const element: ItemCart = this.cartItems[i];
        this.cartItemCount.next(this.cartItemCount.value + element.qty);
        }
      }
    return this.cartItemCount;
  }

  saveProducts(){
    this.angularFireDatabase.database.ref('/products').set(this.products);
  }
  addToCard(product: Product, data: ItemCart[]){
    let added = false;
    if (data === null || data.length === 0){
        data = [];
        data.push({
              item : product,
              qty : 1,
              amount : product.price
            });
      }
      else{
      // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.length; i++){
          const element: ItemCart = data[i];
          if (product.id === element.item.id){
            element.qty += 1;
            element.amount += product.price;
            added = true;
          }
        }
        if (!added){
          data.push({
            item : product,
            qty : 1,
            amount: product.price
          });
        }
      }
    this.storage.set('Cart', data);
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  decreaseToCard(product, i) {
    let remove = false;
    // tslint:disable-next-line:prefer-for-of no-shadowed-variable
    for (let i = 0; i < this.cartItems.length; i++){
      const element: ItemCart = this.cartItems[i];
      if (product.id === element.item.id){
        element.qty -= 1;
        if (element.qty === 0){
          remove = true;
        }
        element.amount -= product.price;
      }
    }
    if (remove){
      this.removeToCard(product, i);
    }else {
      this.cartItemCount.next(this.cartItemCount.value - 1);
    }
  }

  removeToCard(product, i) {
    let value = 0;
    // tslint:disable-next-line:prefer-for-of no-shadowed-variable
    for (let i = 0; i < this.cartItems.length; i++){
      const element: ItemCart = this.cartItems[i];
      if (product.id === element.item.id){
        value = element.qty;
      }
    }
    this.cartItems.splice(i, 1);
    this.storage.set('Cart', this.cartItems);
    this.cartItemCount.next(this.cartItemCount.value - value);
  }
getProducts(value) {
    this.angularFireDatabase.database.ref('/products').orderByChild('id').startAt(value).limitToFirst(10).on('value', (data) => {
      let myMap = new Map();
      myMap = data.val();
      if (myMap != null) {
        Object.keys(myMap).forEach(key => {
          this.adding(myMap[key]);
        });
      }
      this.emitProducts();
    });
  }
  private adding(product: Product){
    if (!product){
      return;
    }
    this.products.push(product);
  }
  getSingleProduct(id: number) {
    return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/products/' + id).once('value').then(
              (data: DataSnapshot) => {
                resolve(data.val());
              }, (error) => {
                reject(error);
              }
          );
        }
    );
  }

createNewProduct(newProduct: Product){
    this.products.push(newProduct);
    this.saveProducts();
    this.emitProducts();
  }

removeProduct(product: Product) {
    const productIndexToRemove = this.products.findIndex(
        (productEl) => {
          if (productEl === product) {
            return true;
          }
        }
    );
    this.products.splice(productIndexToRemove, 1);
    this.saveProducts();
    this.emitProducts();
  }
}
