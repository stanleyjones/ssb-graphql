import DefaultMessage from './DefaultMessage';

export default {
  ...DefaultMessage,
  channel: (msg) => msg.value.content.channel,
  subscribed: (msg) => msg.value.content.subscribed,
}
