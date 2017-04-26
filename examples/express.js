import 'babel-polyfill';
import express from 'express';
import graphql from 'express-graphql';
import { text } from 'body-parser';

import schema from '../src';

const app = express();
app.use(text({ type: 'application/graphql' }));
app.use('/graphql', graphql({ schema, pretty: true }));

app.listen(3000);
