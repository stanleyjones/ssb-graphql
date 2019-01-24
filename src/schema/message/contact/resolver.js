const { getProfile } = require('../../user/helpers');
const DefaultMessage = require('../default/resolver');

module.exports = {
  ...DefaultMessage,
  contact: (msg, { sbot }) => getProfile({ id: msg.value.content.contact }, sbot),
  following: (msg) => msg.value.content.following,
}
