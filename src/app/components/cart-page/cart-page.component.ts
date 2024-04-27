import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from '../product-view/productModal';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  showProduct:any=[];
  public totalAmount:number = 0;
  public showForm:boolean = false;
  myForm:FormGroup|any;  
  constructor(private api:ApiService) { }
  ngOnInit(): void {   
    this.api.products().subscribe(res => {
      this.showProduct = res;
      this.totalAmount = this.api.calculatePrice();
      console.log("show Product" + this.showProduct);
    })
    //form
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })
  }

  removeItem(item:product) {
    this.api.removeCartItem(item);
  }

  emptyCart() {
    this.api.removeAllItems();
  }

  cancel() {
    this.showForm = false;
  }

  onSubmit(){
    this.myForm.value;
    console.log(this.myForm.value)
    this.myForm.reset();
    console.log("email:" + this.myForm.value.email)
    console.log("name:" +this.myForm.value.name)
    console.log("address:" +this.myForm.value.address)
    console.log("mobile:" +this.myForm.value.mobile)
  }
}
