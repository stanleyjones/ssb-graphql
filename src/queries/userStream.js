import pull from 'pull-stream';
import ssbClient from 'ssb-party';
import { GraphQLList, GraphQLString } from 'graphql';

import { Message } from '../types';

export default {
  type: new GraphQLList(Message),
  args: {
    id: { type: GraphQLString },
  },
  resolve: (_, { id }) => new Promise((resolve, reject) => {
    ssbClient((err, sbot) => {
      if (err) { reject(err); }
      pull(
        sbot.createUserStream({ id }),
        pull.collect((err, msgs) => {
          if (err) { reject(err); }
          sbot.close();
          resolve(msgs);
        }),
      );
    });
  }),
};
