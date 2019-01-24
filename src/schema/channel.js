const pull = require('pull-stream');

const { getHistory } = require('./message');

const typeDef = `
	type Channel {
	  name: String!
	  subscribed: Boolean
	  foo: String
	}
`;

const resolvers = {};

const getChannels = async ({ id }, sbot) => {
  const msgs = await getHistory({ id }, sbot);
  return Object.keys(msgs)
    .map((key) => msgs[key])
    .filter((msg) => msg.value.content.type === 'channel')
    .reduce((channels, msg) => {
      const { channel, subscribed } = msg.value.content;
      return [...channels, { name: channel, subscribed }];
    }, []);
};

module.exports = { resolvers, typeDef, getChannels };