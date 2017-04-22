import { buildSchema, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { addResolveFunctionsToSchema } from 'graphql-tools';

import { userStream, whoami } from './queries';
import { Message, Post, Unrecognized } from './resolvers';

const types = buildSchema(`
  interface Message {
    key: String
    sequence: Int
  }

  type Post implements Message {
    key: String
    sequence: Int
    text: String
  }

  type Unrecognized implements Message {
    key: String
    sequence: Int
  }

  type Query {
    userStream(id: String): [Message]
    whoami: String
  }
`);

addResolveFunctionsToSchema(types, { Message, Post, Unrecognized });

export const schema = types;
export const rootValue = { userStream, whoami };
