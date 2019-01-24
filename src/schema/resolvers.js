// const AboutMessage = require('./message/about/resolver');
// const Channel = require('./channel/resolver');
// const ChannelMessage = require('./message/channel/resolver');
// const ContactMessage = require('./message/contact/resolver');
const { resolver: DefaultMessage } = require('./message/default');
// const Message = require('./message/resolver');
// const PostMessage = require('./message/post/resolver');
const { resolvers: Message } = require('./message');
const { resolvers: Query } = require('./query');
const { resolvers: User } = require('./user');
// const User = require('./user/resolver');

module.exports = {
  // AboutMessage,
  // Channel,
  // ChannelMessage,
  // ContactMessage,
  DefaultMessage,
  Message,
  // PostMessage,
  Query,
  User,
};