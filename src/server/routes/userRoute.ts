import * as express from 'express';
import {UserController} from '../controllers/userController';
import {checkAuthorization} from '../routes/utils/checkAuthorization';
export let userRouter = express.Router();
import * as expressJwt from 'express-jwt';
import * as jwt from 'jsonwebtoken';

var User = require('../models/User.model');

let ctrl = new UserController();

userRouter.get('/user', async (req, res) => {
  try{
    let users = await ctrl.getUsers();
    res.status(200).json(users);
  } catch(err) {
    res.status(500).send(err);
  }
});

userRouter.post('/user', async (req, res) => {
  try{
    let user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }
    await ctrl.createNewUser(user); 
    res.status(200).json(user);
  }
  catch(err){
      res.status(500).send(err);
  }
});

userRouter.post('/authenticate', async (req, res) => {
  try{
    let username = req.body.username;
    let password = req.body.password;

    let user = await ctrl.getOneUserByUsername(username);

    if(!user){
      res.status(404).json({ success: false, message: 'Authentication failed. User not found.' });
    }
    else if (user){
      if(user.password !== password){
        res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
      }
      else{
        var token = jwt.sign({_id: user._id}, 'private', { expiresIn: '24h' });
        res.status(200).json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    } 
  }
  catch(err){
      res.status(500).send(err);
  }
});

userRouter.use('/user', checkAuthorization);

userRouter.put('/user/edit/:id', async (req, res) => {
  
  var token = req.headers['x-access-token'];

  try {
    let decoded = await jwt.verify(token, 'private'); 
    let user = {
      password: req.body.password
    }
    await ctrl.editUser(decoded._id, user);
    res.status(200).json({message: 'User updated!'});
  }
  catch(err){
    res.status(500).json(err);
  }

});

//   let hash = await bcrypt.hash(req.body.password, 10);
