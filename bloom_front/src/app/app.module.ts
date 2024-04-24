import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {AuthInterceptor} from './services/auth.interceptor';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TopbarComponent,
    ProductsComponent,
    ProductImageComponent,
    ProductDetailComponent,
    AuthComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
