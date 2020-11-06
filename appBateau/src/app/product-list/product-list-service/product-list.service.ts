import { Injectable } from '@angular/core';
import {Product} from '../../model/Product.model';
import {Subject} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import {ResponseList} from './ResponseList';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  pathComplete = 'http://51.255.166.155:1352/tig/products/?format=json';
  path = 'http://51.255.166.155:1352/tig/products/';
  products: Product[];
  productSubject = new Subject<Product[]>();
  private responseList: ResponseList = new ResponseList(this.products);
  constructor(public firebase: AngularFireDatabase
  ) {
    this.products = new Array();
  }

  emitProducts(){
    this.productSubject.next(this.products);
  }

  saveProducts(){
    this.firebase.database.ref('/products').set(this.products);
  }

  getProducts(value) {
    this.firebase.database.ref('/products').orderByChild('id').startAt(4).limitToFirst(2).on('value', (data) => {
      console.log(data.val());
      this.responseList = data.val() ;
      console.log(this.responseList.listProduct);
      if (this.responseList.listProduct != null) {
        this.responseList.listProduct = this.responseList.listProduct.filter((t): t is Product => !!t);
        this.responseList.listProduct.forEach(product => this.adding(product));
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
