import ssbClient from 'ssb-party';

export default () => new Promise((resolve, reject) => {
  ssbClient((err, sbot) => {
    if (err) { reject(err); }
    sbot.whoami((err, info) => {
      if (err) { reject(err); }
      resolve(info.id);
      sbot.close();
    });
  });
});
