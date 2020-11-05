import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductListService} from './product-list-service/product-list.service';
import {Subscription} from 'rxjs';
import {Product} from '../model/Product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit, OnDestroy {
  url: string;
  itemListData: Product[];
  productsSubscription: Subscription;

    constructor(private httpConfigService: ProductListService, private router: Router) { }


    ngOnInit(): void {
        this.productsSubscription = this.httpConfigService.productSubject.subscribe(
            (products: Product[]) => {
                this.itemListData = products;
            }
        );
        this.httpConfigService.getProducts();
        this.httpConfigService.emitProducts();
    }
    onNewProduct(){
        this.router.navigate(['/products', 'new']);
    }
    onDeleteProduct(product: Product){
        this.httpConfigService.removeProduct(product);
    }
    onViewProduct(id: number){
        this.router.navigate(['/products', 'view', id]);
    }
    ngOnDestroy() {
        this.productsSubscription.unsubscribe();
    }

  doInfinite() {
    this.httpConfigService.getProducts();
  }
}
