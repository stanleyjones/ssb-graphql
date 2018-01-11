import pull from 'pull-stream';

import { getHistory } from '../message/helpers';

export const getChannels = async ({ id }, sbot) => {
  const msgs = await getHistory({ id }, sbot);
  return Object.keys(msgs)
    .map((key) => msgs[key])
    .filter((msg) => msg.value.content.type === 'channel')
    .reduce((channels, msg) => {
      const { channel, subscribed } = msg.value.content;
      return [...channels, { name: channel, subscribed }];
    }, []);
};
