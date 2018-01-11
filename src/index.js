import 'babel-polyfill';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import ssbClient from 'ssb-party';
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers, typeDefs } from './schema';

const schema = makeExecutableSchema({ resolvers, typeDefs });
const app = express();

ssbClient({ party: { out: false } }, (err, sbot) => {
  if (err) { throw new Error(err); }
  app.use('/graphql', graphqlHTTP({ schema, context: { sbot }, graphiql: true }));
  app.listen(3000);
});
