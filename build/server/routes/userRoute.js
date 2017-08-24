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
const express = require("express");
const userController_1 = require("../controllers/userController");
const checkAuthorization_1 = require("../routes/utils/checkAuthorization");
exports.userRouter = express.Router();
const jwt = require("jsonwebtoken");
var User = require('../models/User.model');
let ctrl = new userController_1.UserController();
exports.userRouter.get('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let users = yield ctrl.getUsers();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.userRouter.post('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        };
        yield ctrl.createNewUser(user);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.userRouter.post('/authenticate', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let user = yield ctrl.getOneUserByUsername(username);
        if (!user) {
            res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });
        }
        else if (user) {
            if (user.password !== password) {
                res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
            }
            else {
                var token = jwt.sign({ _id: user._id }, 'private', { expiresIn: '24h' });
                res.status(200).json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
exports.userRouter.use('/user', checkAuthorization_1.checkAuthorization);
exports.userRouter.put('/user/edit/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    var token = req.headers['x-access-token'];
    try {
        let decoded = yield jwt.verify(token, 'private');
        let user = {
            password: req.body.password
        };
        yield ctrl.editUser(decoded._id, user);
        res.status(200).json({ message: 'User updated!' });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//   let hash = await bcrypt.hash(req.body.password, 10);

//# sourceMappingURL=userRoute.js.map
