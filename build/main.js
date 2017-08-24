"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const reviewRoute_1 = require("./server/routes/reviewRoute");
const productRoute_1 = require("./server/routes/productRoute");
const userRoute_1 = require("./server/routes/userRoute");
mongoose.connect("mongodb://localhost");
let app = express();
// app.use((req, res, next) => {
//     let body = '';
//     req.on('data', (chunk) => {
//         body += chunk;
//     });
//     req.on('end', () => {
//         console.log(body);
//         next();
//     });
// });
app.use(bodyParser.json());
app.use(productRoute_1.productRouter);
app.use(reviewRoute_1.reviewRouter);
app.use(userRoute_1.userRouter);
app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, './client')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});
const port = 3000;
app.listen(port);
app.on('listening', onListening);
function onListening() {
    console.log(`Listening on port ` + port);
}

//# sourceMappingURL=main.js.map
