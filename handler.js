
// const awsServerlessExpress = require('aws-serverless-express');
import awsServerlessExpress from 'aws-serverless-express';

// const app = require('./src/index');
import {app} from "./src/index.js";
// as app from './src/index.js';
// import * as Utils from 'app.js';

const server = awsServerlessExpress.createServer(app);


// exports.handler = (event, context) => {
//     return awsServerlessExpress.proxy(server, event, context);
// }

export function handler (event, context) {
    return awsServerlessExpress.proxy(server, event, context);
}