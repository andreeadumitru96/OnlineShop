import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Product } from './product';
import { ProductsComponent } from './products.component';
import { Review } from './review';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private productsUrl = 'http://localhost:3000/product';
    constructor(private http: Http) { }

    getProducts(): Promise<Product[]> {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError);
    }

    getProduct(id: any): Promise <Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Product)
            .catch(this.handleError);
    }

    createProduct(product: Product): Promise <Product> {
        return this.http
            .post(this.productsUrl, JSON.stringify({title: product.title, category: product.category, specifications: product.specifications}), {headers : this.headers})
            .toPromise()
            .then(res => res.json() as Product)
            .catch(this.handleError);
        
    }

    deleteProduct(id: number): Promise <Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http        
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    updateProduct(product: Product): Promise <Product> {
        return this.http
            .put(this.productsUrl, JSON.stringify(product), {headers: this.headers})
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    private handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

