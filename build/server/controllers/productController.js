"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product = require("../models/Product.model");
class ProductController {
    createNewProduct(newProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = new Product(newProduct);
            yield product.save();
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Product.find({}).exec();
        });
    }
    getOneProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Product.findOne({ _id: productId }).exec();
        });
    }
    editProduct(productId, editedProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Product.findOneAndUpdate({ _id: productId }, editedProduct).exec();
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Product.remove({ _id: productId }).exec();
        });
    }
}
exports.ProductController = ProductController;

//# sourceMappingURL=productController.js.map
