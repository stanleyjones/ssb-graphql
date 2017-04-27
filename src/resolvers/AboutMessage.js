import DefaultMessage from './DefaultMessage';

export default {
  ...DefaultMessage,
  name: (msg) => msg.value.content.name,
}
