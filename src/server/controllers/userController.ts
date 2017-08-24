var User = require("../models/User.model");

export class UserController {
    async createNewUser(newUser){
        let user = new User(newUser);
        await user.save();
    }
    async getUsers(){
        return await User.find({}).exec();
    }

    async getOneUser(userId){
        return await User.findOne({_id: userId}).exec();
    }

    async getOneUserByUsername(userUsername){
        return await User.findOne({username: userUsername}).exec();
    }

    async editUser(userId, editedUser){
        await User.findOneAndUpdate({_id: userId}, editedUser).exec();
    }

}
