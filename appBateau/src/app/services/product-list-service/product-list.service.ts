import { Injectable } from '@angular/core';
import {Product} from '../../model/Product.model';
import {Subject} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  pathComplete = 'http://51.255.166.155:1352/tig/products/?format=json';
  path = 'http://51.255.166.155:1352/tig/products/';
  products: Product[];
  productSubject = new Subject<Product[]>();
  constructor(public firebase: AngularFireDatabase
  ) {
    this.products = [];
  }

  emitProducts(){
    this.productSubject.next(this.products);
  }

  saveProducts(){
    this.firebase.database.ref('/products').set(this.products);
  }
  addToCard(product: Product){
    product.stock = product.stock - 1;
    this.firebase.database.ref('/products/' + product.id).update(product);
  }
  getProducts(value) {
    this.firebase.database.ref('/products').orderByChild('id').startAt(value).limitToFirst(10).on('value', (data) => {
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
  adding(product: Product){
    if (!product){
      return;
    }
    this.products.push(product);
  }
  getSingleProduct(id: number) {
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
