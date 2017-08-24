import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Review } from './review';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ReviewService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private reviewUrl = 'http://localhost:3000/product';
    constructor(private http: Http) { }

    getReviews(productId: number): Promise <Review[]> {
        const url = `${this.reviewUrl}/${productId}/${'review'}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Review[])
            .catch(this.handleError)

    }

    createReview(review: Review) {
        const url = `${this.reviewUrl}/${review.productId}/${'review'}`;
        return this.http
            .post(url, JSON.stringify({
                subject: review.subject,
                content: review.content,
                author: review.author,
                date: review.date
            }), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Review)
    }

    private handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}