import DefaultMessage from './DefaultMessage';

export default {
  ...DefaultMessage,
  text: (msg) => msg.value.content.text,
}
