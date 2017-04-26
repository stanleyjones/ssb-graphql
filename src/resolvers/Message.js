import DefaultMessage from './DefaultMessage';

export default {
  __resolveType(obj, ctx, info) {
    switch (obj.value.content.type) {
      case 'about': return 'About';
      case 'post': return 'Post';
      default: return 'DefaultMessage';
    };
  },
  ...DefaultMessage,
}
