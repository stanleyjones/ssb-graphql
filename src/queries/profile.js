import pull from 'pull-stream';
import ssbClient from 'ssb-party';
import ref from 'ssb-ref';

export default (_, { id }) => new Promise((resolve, reject) => {
  ssbClient((err, sbot) => {
    if (err) { reject(err); }
    if (!ref.isFeedId(id)) { reject(new Error(`${id} is not a valid feed ID`)); }
    pull(
      sbot.links({ source: id, dest: id, rel: 'about', values: true }),
      pull.collect((err, msgs) => {
        if (err) { reject(err); }
        const profile = Object.keys(msgs)
          .reduce((profile, key) => ({ ...profile, ...msgs[key].value.content }), {});
        resolve({ id, ...profile });
        sbot.close();
      }),
    );
  });
});
