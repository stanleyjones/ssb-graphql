import 'babel-polyfill';
import express from 'express';
import graphql from 'express-graphql';
import { text } from 'body-parser';

import { schema, rootValue } from '../src';

const app = express();
app.use(text({ type: 'application/graphql' }));
app.use('/ql', graphql({ schema, rootValue, pretty: true }));

app.listen(3000);
