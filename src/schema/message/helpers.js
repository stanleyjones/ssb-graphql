const pull = require('pull-stream');
const ref = require('ssb-ref');

const getHistory = ({ id, sequence = 0 }, sbot) => new Promise((resolve, reject) => {
  if (!ref.isFeedId(id)) { reject(new Error(`${id} is not a valid feed ID`)); }
  pull(
    sbot.createHistoryStream({ id, sequence }),
    pull.collect((err, msgs) => { if (err) { reject(err); } resolve(msgs); }),
  );
});

const getLinks = ({ source, dest, rel }, sbot) => new Promise((resolve, reject) => {
  pull(
    sbot.links({ source, dest, rel, values: true }),
    pull.collect((err, msgs) => { if (err) { reject(err); } resolve(msgs); }),
  );
});

module.exports = { getHistory, getLinks };