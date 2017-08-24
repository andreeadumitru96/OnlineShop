let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ProductSchema = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    specifications: mongoose.Schema.Types.Mixed
});
module.exports = mongoose.model('Product', ProductSchema);

//# sourceMappingURL=Product.model.js.map
