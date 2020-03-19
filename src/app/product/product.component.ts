import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input('data') product: Product;
  constructor() { }

  ngOnInit(): void {
  }


  changeTitle(e){
    // this.product.name = e.target.value;
  }
 
}
