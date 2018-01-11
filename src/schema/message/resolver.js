import DefaultMessage from './default/resolver';

const typeMap = {
  about: 'AboutMessage',
  channel: 'ChannelMessage',
  contact: 'ContactMessage',
  post: 'PostMessage',
};

export default {
  __resolveType: (obj) => typeMap[obj.value.content.type] || 'DefaultMessage',
  ...DefaultMessage,
}
