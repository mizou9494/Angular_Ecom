import { Router } from '@angular/router';
import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit {
  public totalAmount:number = 0;
  constructor(private api:ApiService, private router:Router) { }
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/']);
      this.api.removeAllItems();
    }, 8000)
      
    // total amount coming from api service
    this.totalAmount = this.api.calculatePrice(); 
  }

}
