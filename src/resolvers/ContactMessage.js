import DefaultMessage from './DefaultMessage';

export default {
  ...DefaultMessage,
  contact: (msg) => msg.value.content.contact,
  following: (msg) => msg.value.content.following,
}
