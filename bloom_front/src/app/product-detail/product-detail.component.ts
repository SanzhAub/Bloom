import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = null;
  logged = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
    this.route.paramMap.subscribe((param) => {
      const id = +param.get('id');
      this.service.getProductById(id).subscribe(product => {
        this.product = product;
      });
    });
  }

  toCart(product: Product): void{
    if (!this.logged){
      window.alert('Для покупки необходимо войти в систему');
      return;
    }
    this.cartService.createCartItem(product.id, product.quantity).subscribe(() => {
      window.alert('Продукт успещно добавлен в корзину');
    });
    product.quantity = 0;
  }
}
