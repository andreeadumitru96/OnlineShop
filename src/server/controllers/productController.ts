var Product = require("../models/Product.model");

export class ProductController {
    async createNewProduct(newProduct){
        let product = new Product(newProduct);
        await product.save();
    }

    async getProducts(){
        return await Product.find({}).exec();
    }

    async getOneProduct(productId){
        return await Product.findOne({_id: productId}).exec();
    }

    async editProduct(productId, editedProduct){
        await Product.findOneAndUpdate({_id: productId}, editedProduct).exec();
    }

    async deleteProduct(productId){
        await Product.remove({_id: productId}).exec();
    }
}


