import { GraphQLBoolean } from 'graphql';
import ssbClient from 'ssb-party';

export default {
  type: GraphQLBoolean,
  resolve: () => true,
};
