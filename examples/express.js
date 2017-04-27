import 'babel-polyfill';
import express from 'express';
import graphql from 'express-graphql';
import { text } from 'body-parser';
import ssbClient from 'ssb-party';

import schema from '../src';

const app = express();

ssbClient({ party: { out: false } }, (err, sbot) => {
  if (err) { throw new Error(err); }
  app.use(text({ type: 'application/graphql' }));
  app.use('/graphql', graphql({ schema, context: { sbot }, pretty: true }));
  app.listen(3000);
});
