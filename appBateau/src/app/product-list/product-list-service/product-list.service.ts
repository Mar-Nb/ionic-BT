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
    this.getProducts();
  }

  emitProducts(){
    this.productSubject.next(this.products);
  }

  saveProducts(){
    this.firebase.database.ref('/products').set(this.products);
  }

  getProducts() {
    this.firebase.database.ref('/products').on('value', (data) => {
      this.products = data.val() ? data.val() : [];
      this.emitProducts();
    });
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
