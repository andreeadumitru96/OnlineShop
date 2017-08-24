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
const reviewController_1 = require("../controllers/reviewController");
const productController_1 = require("../controllers/productController");
const userController_1 = require("../controllers/userController");
const checkAuthorization_1 = require("../routes/utils/checkAuthorization");
exports.reviewRouter = express.Router();
let Review = require('../models/Review.model');
let ctrlReview = new reviewController_1.ReviewController();
let ctrlProduct = new productController_1.ProductController();
let ctrlUser = new userController_1.UserController();
exports.reviewRouter.get('/product/:id/review', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let productId = req.params.id;
        let product = ctrlProduct.getOneProduct(productId);
        if (product) {
            let reviews = yield ctrlReview.getReviews(productId);
            res.status(200).json(reviews);
        }
        else {
            res.status(404).send("The product is not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.reviewRouter.get('/product/:id/review/:rid', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let productId = req.params.id;
        let product = ctrlProduct.getOneProduct(productId);
        if (product) {
            let reviewId = req.params.id;
            let review = yield ctrlReview.getOneReview(reviewId);
            res.status(200).json(review);
        }
        else {
            res.status(404).send("The product is not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.reviewRouter.use('/product/:id/review', checkAuthorization_1.checkAuthorization);
exports.reviewRouter.post('/product/:id/review', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let user = yield ctrlUser.getOneUser(req.decoded._id);
        if (user) {
            let productId = req.params.id;
            let product = ctrlProduct.getOneProduct(productId);
            if (product) {
                let review = {
                    author: user._id,
                    subject: req.body.subject,
                    content: req.body.content,
                    productId: productId,
                    date: req.body.date
                };
                yield ctrlReview.createNewReview(review);
                res.status(200).json(review);
            }
            else {
                res.status(404).send("The product is not found");
            }
        }
        else {
            res.status(404).send("The user is not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.reviewRouter.put('/product/:id/review/:rid', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let user = yield ctrlUser.getOneUser(req.decoded._id);
        if (user) {
            let productId = req.params.id;
            let reviewId = req.params.rid;
            let product = ctrlProduct.getOneProduct(productId);
            if (product) {
                let review = {
                    content: req.body.content,
                    subject: req.body.subject,
                    date: req.body.date
                };
                yield ctrlReview.editReview(reviewId, review);
                res.status(200).json({ message: 'Review updated!' });
            }
            else {
                res.status(404).send("The product is not found");
            }
        }
        else {
            res.status(404).send("The user is not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.reviewRouter.delete('/product/:id/review/:rid', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let user = yield ctrlUser.getOneUser(req.decoded._id);
        if (user) {
            let reviewId = req.params.rid;
            let productId = req.params.id;
            let product = ctrlProduct.getOneProduct(productId);
            if (product) {
                yield ctrlReview.deleteReview(reviewId);
                res.status(200).json({ message: 'Review deleted!' });
            }
            else {
                res.status(404).send("The product is not found");
            }
        }
        else {
            res.status(404).send("The user is not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));

//# sourceMappingURL=reviewRoute.js.map
