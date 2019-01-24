const DefaultMessage = require('../default/resolver');

module.exports = {
  ...DefaultMessage,
  channel: (msg) => msg.value.content.channel,
  subscribed: (msg) => msg.value.content.subscribed,
}
