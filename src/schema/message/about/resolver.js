const DefaultMessage = require('../default/resolver');

module.exports = {
  ...DefaultMessage,
  name: (msg) => msg.value.content.name,
}
