import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
import { ReviewService } from './review.service';
import { Review } from './review';
 
export class MyAppModule {}

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html', 
  providers: [ProductService]
})

export class ProductsComponent implements OnInit {
  title = 'Online Shop';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService, private reviewService: ReviewService) { }

  getProducts(): void {
     this.productService.getProducts()
      .then(products => {
        this.products = products
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  createProduct(title: string, category: string, specifications: Object): void {
    title = title.trim();
    
    if(!title){
        return;
    }
    let product = new Product();
    product.title = title;
    product.category = category;
    product.specifications = specifications;

    this.productService.createProduct(product)
        .then(product => {
        this.products.push(product);
        this.selectedProduct = null;
    });
  }
  deleteProduct(product: any): void {
    this.productService.deleteProduct(product._id)
        .then(() => {
          this.products = this.products.filter(p => p !== product);
          if (this.selectedProduct === product){
            this.selectedProduct = null;
          }
        });  
  }

  editProduct(title: string, category: string, specifications: Object): void {
    let product = new Product();
    product.title = title;
    product.category = category;
    product.specifications = specifications;

    this.productService.updateProduct(product);
  }

}


