const typeDef = `
	type DefaultMessage implements Message {
	  content: String
	  key: String!
	  sequence: Int!
	  timestamp: Float!
	  type: String!
	}
`;

const resolvers = {
  content: (msg) => JSON.stringify(msg.value.content),
  sequence: (msg) => msg.value.sequence,
  timestamp: (msg) => msg.value.timestamp,
  type: (msg) => msg.value.content.type,
}

module.exports = { resolvers, typeDef };