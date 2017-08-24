"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const review_service_1 = require("./review.service");
const review_1 = require("./review");
const product_service_1 = require("./product.service");
class MyAppModule {
}
exports.MyAppModule = MyAppModule;
let ReviewComponent = class ReviewComponent {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    getReviews(productId) {
        this.reviewService.getReviews(productId)
            .then(reviews => {
            this.reviews = reviews;
        });
    }
    createReview(subject, content, author, date) {
        let review = new review_1.Review();
        review.subject = subject;
        review.author = author;
        review.content = content;
        review.date = date;
        this.reviewService.createReview(review)
            .then(reviews => {
            this.reviews.push(review);
        });
    }
};
ReviewComponent = __decorate([
    core_1.Component({
        selector: 'my-review',
        templateUrl: './product-detail.component.html',
        providers: [review_service_1.ReviewService, product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewComponent);
exports.ReviewComponent = ReviewComponent;

//# sourceMappingURL=review.component.js.map
