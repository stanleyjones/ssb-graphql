import ssbClient from 'ssb-client';
import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      health: {
        type: GraphQLBoolean,
        resolve: () => true,
      },
      whoami: {
        type: GraphQLString,
        resolve: async () => {
          let id = 'foo';
          await ssbClient((err, sbot) => {
            if (err) { console.log(err); }
            id = 'bar';
            sbot.whoami((err, info) => {
              if (err) { console.log(err); }
              id = 'baz';
            });
            sbot.close();
          });
          return id;
        }
      }
    },
  }),
});
