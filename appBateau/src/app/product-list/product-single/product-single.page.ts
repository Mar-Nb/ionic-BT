import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from '../../services/product-list-service/product-list.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.page.html',
  styleUrls: ['./product-single.page.scss'],
})
export class ProductSinglePage implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute, private productListService: ProductListService,
              private router: Router) {}
  ngOnInit() {
    this.product = new Product();
    const id = this.route.snapshot.params.id;
    this.productListService.getSingleProduct(+id).then(
        (product: Product) => {
          this.product = product;
        }
    );
  }

  onBack() {
    this.router.navigate(['/movies']);
  }

}
