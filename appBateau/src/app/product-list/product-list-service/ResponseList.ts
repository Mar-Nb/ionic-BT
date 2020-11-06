import {Product} from '../../model/Product.model';

export class ResponseList{
    listProduct: Product[];

    constructor(listProduct: Product[]) {
        this.listProduct = listProduct;
    }
}
