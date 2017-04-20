import { GraphQLString } from 'graphql';
import ssbClient from 'ssb-party';

export default {
  type: GraphQLString,
  resolve: () => new Promise((resolve, reject) => {
    ssbClient((err, sbot) => {
      if (err) { reject(err); }
      sbot.whoami((err, info) => {
        if (err) { reject(err); }
        sbot.close();
        resolve(info.id);
      });
    });
  }),
};
