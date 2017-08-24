var Review = require("../models/Review.model");

export class ReviewController {
    async createNewReview(newReview){
        let review = new Review(newReview);
        await review.save();
    }

    async getReviews(productId){
        return await Review.find({productId: productId}).exec();
    }

    async getOneReview(reviewId){
        return await Review.findOne({_id: reviewId}).exec();
    }

    async editReview(reviewId, editedReview){
        await Review.findOneAndUpdate({reviewId: reviewId}, editedReview).exec();
    }

    async deleteReview(reviewId){
        await Review.remove({_id: reviewId}).exec();
    }
}


