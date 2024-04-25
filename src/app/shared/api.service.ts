import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../components/product-view/productModal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<product[]>("https://dummyjson.com/products");
  }
  getProductById(id: string) {
    return this.http.get("https://dummyjson.com/products/"+ id)
  }

  addToCart(data:product) {
    this.cartItemList.push(data);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
  }

  products() {
    return this.productList.asObservable();
  }
}
