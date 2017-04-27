import { getLinks } from '../message/helpers';

export const getId = (sbot) => new Promise((resolve, reject) => {
  sbot.whoami((err, info) => { if (err) { reject(err); } resolve(info.id); });
});

export const getProfile = async ({ id }, sbot) => {
  const msgs = await getLinks({ source: id, dest: id, rel: 'about' }, sbot);
  const profile = Object.keys(msgs)
    .reduce((profile, key) => ({ ...profile, ...msgs[key].value.content }), {});
  return { id, ...profile };
};
