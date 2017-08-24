import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import {reviewRouter} from './server/routes/reviewRoute';
import {productRouter} from './server/routes/productRoute';
import {userRouter} from './server/routes/userRoute';

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

app.use(productRouter);
app.use(reviewRouter);
app.use(userRouter);



app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, './client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

const port =  3000;

app.listen(port); 
app.on('listening', onListening);

function onListening(): void {
    console.log(`Listening on port `+ port);
}

