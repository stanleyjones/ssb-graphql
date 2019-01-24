// const { importSchema } = require('graphql-import');

// const Message = importSchema('src/schema/message/type.graphql');
// const AboutMessage = importSchema('src/schema/message/about/type.graphql');
const { typeDef: DefaultMessage } = require('./message/default');
// const Channel = importSchema('src/schema/channel/type.graphql');
// const ChannelMessage = importSchema('src/schema/message/channel/type.graphql');
// const ContactMessage = importSchema('src/schema/message/contact/type.graphql');
// const PostMessage = importSchema('src/schema/message/post/type.graphql');
// const User = importSchema('src/schema/user/type.graphql');

const { typeDef: Channel } = require('./channel');
const { typeDef: Query } = require('./query');
const { typeDef: User } = require('./user');
const { typeDef: Message } = require('./message');

const Schema = `
  schema {
    query: Query
  }
`;

module.exports = [
  // AboutMessage,
  Channel,
  // ChannelMessage,
  // ContactMessage,
  DefaultMessage,
  Message,
  // PostMessage,
  Query,
  Schema,
  User,
];