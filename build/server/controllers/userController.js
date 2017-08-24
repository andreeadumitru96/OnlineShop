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
var User = require("../models/User.model");
class UserController {
    createNewUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = new User(newUser);
            yield user.save();
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.find({}).exec();
        });
    }
    getOneUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.findOne({ _id: userId }).exec();
        });
    }
    getOneUserByUsername(userUsername) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.findOne({ username: userUsername }).exec();
        });
    }
    editUser(userId, editedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User.findOneAndUpdate({ _id: userId }, editedUser).exec();
        });
    }
}
exports.UserController = UserController;

//# sourceMappingURL=userController.js.map
