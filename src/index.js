import 'babel-polyfill';
import express from 'express';
import graphql from 'express-graphql';
import ssbClient from 'ssb-party';
import { makeExecutableSchema } from 'graphql-tools';
import { text } from 'body-parser';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const schema = makeExecutableSchema({ resolvers, typeDefs });
const app = express();

ssbClient({ party: { out: false } }, (err, sbot) => {
  if (err) { throw new Error(err); }
  app.use(text({ type: 'application/graphql' }));
  app.use('/graphql', graphql({ schema, context: { sbot }, pretty: true }));
  app.listen(3000);
});
