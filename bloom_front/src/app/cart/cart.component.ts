import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {Cart} from '../models/cart';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = null;
  constructor(private service: CartService,
              private location: Location) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token){
      this.location.back();
    }
    this.loadData();
  }
  loadData(): void{
    this.service.getCart().subscribe(cart => {
      this.cart = cart;
      console.log(cart);
    });
  }
  order(): void{
    window.alert('Заказ оформлен');
  }
}
