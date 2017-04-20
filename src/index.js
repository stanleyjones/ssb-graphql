import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { health, userStream, whoami } from './queries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      health,
      userStream,
      whoami,
    },
  }),
});
