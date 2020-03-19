import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',

})
export class AddFormComponent implements OnInit {
  product: Product = new Product();
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }
  addProduct(){
    console.log('Component' + this.product);
    this.productService.addProduct(this.product);
  }
}
