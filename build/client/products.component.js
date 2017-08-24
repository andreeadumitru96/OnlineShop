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
const product_1 = require("./product");
const product_service_1 = require("./product.service");
const review_service_1 = require("./review.service");
class MyAppModule {
}
exports.MyAppModule = MyAppModule;
let ProductsComponent = class ProductsComponent {
    constructor(productService, reviewService) {
        this.productService = productService;
        this.reviewService = reviewService;
        this.title = 'Online Shop';
    }
    getProducts() {
        this.productService.getProducts()
            .then(products => {
            this.products = products;
        });
    }
    ngOnInit() {
        this.getProducts();
    }
    onSelect(product) {
        this.selectedProduct = product;
    }
    createProduct(title, category, specifications) {
        title = title.trim();
        if (!title) {
            return;
        }
        let product = new product_1.Product();
        product.title = title;
        product.category = category;
        product.specifications = specifications;
        this.productService.createProduct(product)
            .then(product => {
            this.products.push(product);
            this.selectedProduct = null;
        });
    }
    deleteProduct(product) {
        this.productService.deleteProduct(product._id)
            .then(() => {
            this.products = this.products.filter(p => p !== product);
            if (this.selectedProduct === product) {
                this.selectedProduct = null;
            }
        });
    }
    editProduct(title, category, specifications) {
        let product = new product_1.Product();
        product.title = title;
        product.category = category;
        product.specifications = specifications;
        this.productService.updateProduct(product);
    }
};
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        templateUrl: './products.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, review_service_1.ReviewService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;

//# sourceMappingURL=products.component.js.map
