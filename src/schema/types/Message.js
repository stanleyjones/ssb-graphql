import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Message',
  fields: {
    key: { type: GraphQLString },
    value: { type: GraphQLString, resolve: (msg) => JSON.stringify(msg.value) },
  },
});
