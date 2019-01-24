const express = require('express');
const expressGraphql = require('express-graphql');
const ssbClient = require('ssb-party');
const { makeExecutableSchema } = require('graphql-tools');

const { resolvers, typeDefs } = require('./schema');

const schema = makeExecutableSchema({ resolvers, typeDefs });
const app = express();

ssbClient({ party: { out: false } }, (err, sbot) => {
  if (err) { throw new Error(err); }
  app.use('/graphql', expressGraphql({ schema, context: { sbot }, graphiql: true }));
  app.listen(3000);
});
