const { getChannels } = require('./channel');
const { getLinks } = require('./message');

const typeDef = `
	type User {
	  channels: [Channel]
	  id: String!
	  name: String
	}
`;

const resolvers = {
  channels: (obj, args, { sbot }) => getChannels(obj, sbot),
}

const getId = (sbot) => new Promise((resolve, reject) => {
  sbot.whoami((err, info) => { if (err) { reject(err); } resolve(info.id); });
});

const getProfile = async ({ id }, sbot) => {
  try {
    const msgs = await getLinks({ source: id, dest: id, rel: 'about' }, sbot);
    const profile = Object.keys(msgs)
      .map((key) => msgs[key])
      .reduce((profile, msg) => ({ ...profile, ...msg.value.content }), {});
    return { id, ...profile };
  } catch (err) {
    return { id, name: id };
  }
};

module.exports = { resolvers, typeDef, getId, getProfile };

