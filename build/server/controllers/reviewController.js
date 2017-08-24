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
var Review = require("../models/Review.model");
class ReviewController {
    createNewReview(newReview) {
        return __awaiter(this, void 0, void 0, function* () {
            let review = new Review(newReview);
            yield review.save();
        });
    }
    getReviews(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Review.find({ productId: productId }).exec();
        });
    }
    getOneReview(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Review.findOne({ _id: reviewId }).exec();
        });
    }
    editReview(reviewId, editedReview) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Review.findOneAndUpdate({ reviewId: reviewId }, editedReview).exec();
        });
    }
    deleteReview(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Review.remove({ _id: reviewId }).exec();
        });
    }
}
exports.ReviewController = ReviewController;

//# sourceMappingURL=reviewController.js.map
