const pull = require('pull-stream');
const ref = require('ssb-ref');

const { resolvers: DefaultMessage } = require('./default');

const typeDef = `
	interface Message {
	  content: String
	  key: String!
	  sequence: Int!
	  timestamp: Float!
	  type: String!
	}
`;

const typeMap = {
  about: 'AboutMessage',
  channel: 'ChannelMessage',
  contact: 'ContactMessage',
  post: 'PostMessage',
};

const resolvers = {
  __resolveType: (obj) => typeMap[obj.value.content.type] || 'DefaultMessage',
  ...DefaultMessage,
}

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

module.exports = { resolvers, typeDef, getHistory, getLinks };