import { getChannels } from '../channel/helpers';

export default {
  channels: (obj, args, { sbot }) => getChannels(obj, sbot),
}
