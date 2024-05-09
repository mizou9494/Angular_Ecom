import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-view/productModal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productData:product = {} as product;
  showAdd:boolean = true;
  showRemove:boolean = false;
  
  constructor(private api:ApiService, private activatedRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log(this.productData)
    let productId = this.activatedRoute.snapshot.paramMap.get('productId');

    productId && this.api.getProductById(productId).subscribe((res) => {
      this.productData = res;
      console.log(res);
    })
  }

  addItem(productData:product){
    this.showAdd = false;
    this.showRemove = true;
    this.api.addToCart(productData!)
  }

  removeItem(){
    this.showAdd = true;
    this.showRemove = false;
    const index = this.api.cartItemList.length - 1
    this.api.removeCartItem(index)
  }

}
