import DefaultMessage from '../default/resolver';

export default {
  ...DefaultMessage,
  name: (msg) => msg.value.content.name,
}
