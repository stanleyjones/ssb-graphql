const DefaultMessage = require('../default/resolver');

module.exports = {
  ...DefaultMessage,
  text: (msg) => msg.value.content.text,
}
