import pull from 'pull-stream';
import ref from 'ssb-ref';

export const getHistory = ({ id, sequence = 0 }, sbot) => new Promise((resolve, reject) => {
  if (!ref.isFeedId(id)) { reject(new Error(`${id} is not a valid feed ID`)); }
  pull(
    sbot.createHistoryStream({ id, sequence }),
    pull.collect((err, msgs) => { if (err) { reject(err); } resolve(msgs); }),
  );
});

export const getLinks = ({ source, dest, rel }, sbot) => new Promise((resolve, reject) => {
  pull(
    sbot.links({ source, dest, rel, values: true }),
    pull.collect((err, msgs) => { if (err) { reject(err); } resolve(msgs); }),
  );
});
