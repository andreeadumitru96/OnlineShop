"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const product_detail_component_1 = require("./product-detail.component");
const products_component_1 = require("./products.component");
const product_service_1 = require("./product.service");
const review_service_1 = require("./review.service");
const app_component_1 = require("./app.component");
const authentication_component_1 = require("./authentication/authentication.component");
const app_routing_module_1 = require("./app-routing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            product_detail_component_1.ProductDetailComponent,
            authentication_component_1.AuthenticationComponent,
            products_component_1.ProductsComponent,
        ],
        providers: [product_service_1.ProductService, review_service_1.ReviewService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
