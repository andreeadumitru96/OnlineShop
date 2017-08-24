"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function checkAuthorization(req, res, next) {
    var token = req.headers['x-access-token'];
    jwt.verify(token, 'private', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        }
        req.decoded = decoded;
        next();
    });
}
exports.checkAuthorization = checkAuthorization;

//# sourceMappingURL=checkAuthorization.js.map
