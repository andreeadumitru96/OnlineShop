import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Review } from './review';
import { ReviewService } from './review.service';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductsComponent } from './products.component';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'], 
  providers: [ ProductService, ProductsComponent ]
})
export class ProductDetailComponent implements OnInit{
    product: Product;
    reviews: Review[] = [];

  constructor(
    private productService: ProductService,
    private reviewService: ReviewService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
        let productId = this.route.snapshot.params['id'];
        
        this.productService.getProduct(productId);
        
        this.reviewService.getReviews(productId);
    })
    
  }

  getReviews(productId: any): void {
    this.reviewService.getReviews(productId)
      .then(reviews => {
        this.reviews = reviews;
        return reviews;
      });
  }

  createReview(subject: string, content: string){

    let productId = this.route.snapshot.params['id'];
    let review = new Review();
    review.subject = subject;
    review.content = content;
    review.productId = productId;

    this.reviewService.createReview(review)
      .then(reviews => {
        this.reviews.push(review);
      })
  }

}

