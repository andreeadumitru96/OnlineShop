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
const router_1 = require("@angular/router");
const review_1 = require("./review");
const review_service_1 = require("./review.service");
const product_service_1 = require("./product.service");
const products_component_1 = require("./products.component");
require("rxjs/add/operator/switchMap");
let ProductDetailComponent = class ProductDetailComponent {
    constructor(productService, reviewService, route) {
        this.productService = productService;
        this.reviewService = reviewService;
        this.route = route;
        this.reviews = [];
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let productId = this.route.snapshot.params['id'];
            this.productService.getProduct(productId);
            this.reviewService.getReviews(productId);
        });
    }
    getReviews(productId) {
        this.reviewService.getReviews(productId)
            .then(reviews => {
            this.reviews = reviews;
            return reviews;
        });
    }
    createReview(subject, content) {
        let productId = this.route.snapshot.params['id'];
        let review = new review_1.Review();
        review.subject = subject;
        review.content = content;
        review.productId = productId;
        this.reviewService.createReview(review)
            .then(reviews => {
            this.reviews.push(review);
        });
    }
};
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './product-detail.component.html',
        styleUrls: ['./product-detail.component.css'],
        providers: [product_service_1.ProductService, products_component_1.ProductsComponent]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        review_service_1.ReviewService,
        router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;

//# sourceMappingURL=product-detail.component.js.map
