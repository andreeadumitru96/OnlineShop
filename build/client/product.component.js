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
const product_service_1 = require("./product.service");
class MyAppModule {
}
exports.MyAppModule = MyAppModule;
let AppComponent = class AppComponent {
    constructor(productService) {
        this.productService = productService;
        this.title = 'Online Shop';
    }
    getProducts() {
        this.productService.getProducts()
            .then(products => this.products = products);
    }
    ngOnInit() {
        this.getProducts();
    }
    onSelect(product) {
        this.selectedProduct = product;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
    <h1>{{title}}</h1>
    <h2>Products: </h2>
    <ul class="products">
      <li *ngFor="let product of products"
        [class.selected]="product === selectedProducts"
        (click)="onSelect(product)">
        <span class="badge">{{product.id}}</span> {{product.title}}
      </li>
    </ul>
    <product-detail [product]="selectedProduct"></product-detail>
  `,
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=product.component.js.map
