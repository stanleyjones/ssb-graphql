import DefaultMessage from '../default/resolver';

export default {
  ...DefaultMessage,
  channel: (msg) => msg.value.content.channel,
  subscribed: (msg) => msg.value.content.subscribed,
}
