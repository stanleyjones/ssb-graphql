const { getHistory } = require('./message');
const { getId, getProfile } = require('./user');

const typeDef = `
	type Query {
		history(id: String): [Message]
	  profile(id: String): User
	  whoami: String
	}
`;

const resolvers = {
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  profile: (_, { id }, { sbot }) => getProfile({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
}

module.exports = { resolvers, typeDef };