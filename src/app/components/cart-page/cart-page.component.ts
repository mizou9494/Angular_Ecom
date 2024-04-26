import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from '../product-view/productModal';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  showProduct:any=[];
  constructor(private api:ApiService) { }
  ngOnInit(): void {   
    this.api.products().subscribe(res => {
      this.showProduct = res;
      console.log("showProduct" + this.showProduct);
    })
  }

  removeItem(item:product) {
    this.api.removeCartItem(item);
  }

}
