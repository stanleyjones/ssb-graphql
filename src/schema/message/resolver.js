const DefaultMessage = require('./default/resolver');

const typeMap = {
  about: 'AboutMessage',
  channel: 'ChannelMessage',
  contact: 'ContactMessage',
  post: 'PostMessage',
};

module.exports = {
  __resolveType: (obj) => typeMap[obj.value.content.type] || 'DefaultMessage',
  ...DefaultMessage,
}
