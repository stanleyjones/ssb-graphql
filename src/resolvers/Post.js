import { messageResolvers } from './Message';

export default {
  ...messageResolvers,
  text(msg) { return msg.value.content.text || 'n/a'; },
}
