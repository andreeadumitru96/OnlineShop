import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { ReviewService } from './review.service';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    AuthenticationComponent,
    ProductsComponent,
  ],
  providers: [ ProductService, ReviewService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
