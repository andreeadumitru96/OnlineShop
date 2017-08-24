import * as express from 'express';
import {ReviewController} from '../controllers/reviewController';
import {ProductController} from '../controllers/productController';
import {UserController} from '../controllers/userController';
import {checkAuthorization} from '../routes/utils/checkAuthorization';
import * as jwt from 'jsonwebtoken';
export let reviewRouter = express.Router();

let Review = require('../models/Review.model');

let ctrlReview = new ReviewController();
let ctrlProduct = new ProductController();
let ctrlUser = new UserController();

reviewRouter.get('/product/:id/review', async (req, res) => {
    try{
        let productId = req.params.id;
        let product = ctrlProduct.getOneProduct(productId);
        if(product){
            let reviews = await ctrlReview.getReviews(productId);
            res.status(200).json(reviews);
        }
        else {
            res.status(404).send("The product is not found");
        }   
    }
    catch(err){
        res.status(500).send(err);
    }
});

reviewRouter.get('/product/:id/review/:rid', async (req, res) => {
    try {
        let productId = req.params.id;
        let product = ctrlProduct.getOneProduct(productId);
        if(product){
            let reviewId = req.params.id;
            let review = await ctrlReview.getOneReview(reviewId);
            res.status(200).json(review);
        }
        else{
            res.status(404).send("The product is not found");
        }
    }
    catch(err){
        res.status(500).send(err);
    }
});

reviewRouter.use('/product/:id/review', checkAuthorization);

reviewRouter.post('/product/:id/review', async (req, res) => {
    try{
        let user = await ctrlUser.getOneUser(req.decoded._id);
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
                }                                     
                await ctrlReview.createNewReview(review); 
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
    catch(err){
        res.status(500).send(err);
    }
});

reviewRouter.put('/product/:id/review/:rid', async (req, res) => {
    try {
        let user = await ctrlUser.getOneUser(req.decoded._id);
        if (user) {
            let productId = req.params.id;
            let reviewId = req.params.rid;
            let product = ctrlProduct.getOneProduct(productId); 

            if (product) {
                let review = {
                    content: req.body.content,
                    subject: req.body.subject,
                    date: req.body.date
                }                                    
                await ctrlReview.editReview(reviewId, review);
                res.status(200).json({message: 'Review updated!'});
            }
            else {
                res.status(404).send("The product is not found");
            }   
        }
        else {
            res.status(404).send("The user is not found");
        }    
    }
    catch(err){
        res.status(500).send(err);
    }
});

reviewRouter.delete('/product/:id/review/:rid', async (req, res) => {
    try{
        let user = await ctrlUser.getOneUser(req.decoded._id);
        if (user) {
            let reviewId = req.params.rid;
            let productId = req.params.id;
            let product = ctrlProduct.getOneProduct(productId); 

            if (product) {                                    
                await ctrlReview.deleteReview(reviewId);
                res.status(200).json({message: 'Review deleted!'});
            }
            else {
                res.status(404).send("The product is not found");
            }   
        }
        else {
            res.status(404).send("The user is not found");
        }  
    }
    catch(err){
        res.status(500).send(err);
    }
});






