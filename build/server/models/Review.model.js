var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String,
    },
    content: {
        type: String
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    date: {
        type: Date
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Review', ReviewSchema);

//# sourceMappingURL=Review.model.js.map
