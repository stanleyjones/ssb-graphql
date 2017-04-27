import pull from 'pull-stream';
import ref from 'ssb-ref';

export default (_, { id, sequence }, { sbot }) => new Promise((resolve, reject) => {
  if (!ref.isFeedId(id)) { reject(new Error(`${id} is not a valid feed ID`)); }
  pull(
    sbot.createHistoryStream({ id, sequence }),
    pull.collect((err, msgs) => {
      if (err) { reject(err); }
      resolve(msgs);
    }),
  );
});
