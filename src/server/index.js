import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import '@babel/polyfill';

import { PORT, HOST } from './config';
import { routers } from './controller';

const app = express();

mongoose
  .connect(HOST)
  .then(() => console.log(`db connected`))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('*', routers());
app.listen(PORT, () => console.log(`Serving at http://localhost:${PORT}`));
