// const express = require('express');
import express from 'express';

// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';

// const cors = require('cors');

import cors from 'cors';

// const {
//     routes: userRoutes,
// } = require('./user/routes');

import {routes} from "./routes/indexroutes.js";
// as userRoutes from './user/routes.js';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', routes);

// module.exports = app;