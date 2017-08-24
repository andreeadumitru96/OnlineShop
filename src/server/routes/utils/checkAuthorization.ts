import * as jwt from 'jsonwebtoken';

export function checkAuthorization(req, res, next){
    var token = req.headers['x-access-token'];
  
    jwt.verify(token, 'private', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Failed to authenticate token.' });
      }
      req.decoded = decoded;
      next();
    });
}

