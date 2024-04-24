import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../models/category';
import {CategoryService} from '../services/category.service';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: Category = null;
  products: Product[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CategoryService,
              private productService: ProductService,
              private cartService: CartService
              ) { }
  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.route.paramMap.subscribe((param) => {
      const id = +param.get('id');
      if (id === 0){
        // this.products = this.service.get(id);
        this.productService.getProductList().subscribe(products => {
          this.products = products;
        });
      }else{
        this.service.getCategoryById(id).subscribe(category => {
          this.category = category;
        });
        this.service.getProducts(id).subscribe(products => {
          this.products = products;
        });
      }
    });
  }

  toCart(product: Product): void {
    this.cartService.createCartItem(product.id, product.quantity).subscribe(() => {
      window.alert('Букет добавлен в корзину');
    });
    product.quantity = 0;
  }
}
