import { getLinks } from '../message/helpers';

export const getId = (sbot) => new Promise((resolve, reject) => {
  sbot.whoami((err, info) => { if (err) { reject(err); } resolve(info.id); });
});

export const getProfile = async ({ id }, sbot) => {
  try {
    const msgs = await getLinks({ source: id, dest: id, rel: 'about' }, sbot);
    const profile = Object.keys(msgs)
      .map((key) => msgs[key])
      .reduce((profile, msg) => ({ ...profile, ...msg.value.content }), {});
    return { id, ...profile };
  } catch (err) {
    return { id, name: id };
  }
};
