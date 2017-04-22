export const messageResolvers = {
  sequence: (msg) => msg.value.sequence,
}

export default {
  __resolveType(obj, ctx, info) {
    switch (obj.value.content.type) {
      case 'post': return 'Post';
      default: return 'Unrecognized';
    };
  },
  ...messageResolvers,
}
