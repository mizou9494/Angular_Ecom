import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from '../product-view/productModal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public cartItems: number = 0;
  constructor(private api:ApiService) {}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartItems = res.length;
    })
  }
  
}
