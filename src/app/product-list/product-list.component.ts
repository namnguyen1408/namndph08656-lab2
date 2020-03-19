import { Component, OnInit } from '@angular/core';
import { ProductService }from '../product.service';
import { Product } from '../Product';
import { from } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  //biến chứa dữ liệu
  selected: Product;
  products: Product[];
  constructor(
    private productService: ProductService
  ) {
    console.log('constructor')
   }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.products = this.productService.getProducts();
  }
  

showDetail(product){
this.selected=product
}
removeItem(id){
  this.products = this.productService.removeProduct(id);}
}
