import * as express from 'express';
import {ProductController} from '../controllers/productController';
export let productRouter = express.Router();

let Product = require('../models/Product.model');

let ctrl = new ProductController();

productRouter.get('/product', async (req, res) => {
    try{
        let products = await ctrl.getProducts();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).send(err);
    }
});

productRouter.get('/product/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await ctrl.getOneProduct(productId);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).send(err);
    }
});

productRouter.post('/product', async (req, res) => {
    try{
        let product = {
            title: req.body.title,
            category: req.body.category,
            specifications: req.body.specifications
        }
        await ctrl.createNewProduct(product); 
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).send(err);
    }
});

productRouter.put('/product/:id', async (req, res) => {
    try {
        let product = {
        title: req.body.title,
        category: req.body.category,
        specifications: req.body.specifications
        }
        let productId = req.params.id;
        await ctrl.editProduct(productId, product);
        res.status(200).json({message: 'Product updated!'});
    }
    catch(err){
        res.status(500).send(err);
    }
});

productRouter.delete('/product/:id', async (req, res) => {
    try{
        let productId = req.params.id;
        await ctrl.deleteProduct(productId);
        res.status(200).json({message: 'Product deleted!'});
    }
    catch(err){
        res.status(500).send(err);
    }
});

