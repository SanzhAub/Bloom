import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  private loading = false;
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    console.log(1);
    this.loadCategories();
  }
  loadCategories(): void {
    this.loading = true;
    this.service.getCategoryList().subscribe(categories => {
      this.categories = categories;
    });
  }
}
