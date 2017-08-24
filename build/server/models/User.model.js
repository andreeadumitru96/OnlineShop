var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String
});
module.exports = mongoose.model('User', UserSchema);

//# sourceMappingURL=User.model.js.map
