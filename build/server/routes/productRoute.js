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
const express = require("express");
const productController_1 = require("../controllers/productController");
exports.productRouter = express.Router();
let Product = require('../models/Product.model');
let ctrl = new productController_1.ProductController();
exports.productRouter.get('/product', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let products = yield ctrl.getProducts();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.productRouter.get('/product/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let productId = req.params.id;
        let product = yield ctrl.getOneProduct(productId);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.productRouter.post('/product', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let product = {
            title: req.body.title,
            category: req.body.category,
            specifications: req.body.specifications
        };
        yield ctrl.createNewProduct(product);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.productRouter.put('/product/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let product = {
            title: req.body.title,
            category: req.body.category,
            specifications: req.body.specifications
        };
        let productId = req.params.id;
        yield ctrl.editProduct(productId, product);
        res.status(200).json({ message: 'Product updated!' });
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.productRouter.delete('/product/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let productId = req.params.id;
        yield ctrl.deleteProduct(productId);
        res.status(200).json({ message: 'Product deleted!' });
    }
    catch (err) {
        res.status(500).send(err);
    }
}));

//# sourceMappingURL=productRoute.js.map
