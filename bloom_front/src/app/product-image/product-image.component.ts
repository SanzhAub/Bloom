import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Image} from '../models/image';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() images: Image[] = [];
  index = 0;
  BASE_URL = 'http://localhost:8000';
  // @Input() productId: number;
  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

  next(i: number): void{
    this.index += i;
    if (this.index === -1){
      this.index = this.images.length - 1;
    }
    if (this.index === this.images.length){
      this.index = 0;
    }
  }

}
