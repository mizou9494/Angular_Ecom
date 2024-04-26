import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from './productModal';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
  data: any|product[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts(){
      this.api.getProducts().subscribe(res=>{
      this.data = res
      console.log(res) 
    }) 
  }
  addItem(item: product) {
    this.api.addToCart(item);
  }
  removeItem(item: product) {
    this.api.removeCartItem(item);
  }
}
