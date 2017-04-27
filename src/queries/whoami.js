export default (_, obj, { sbot }) => new Promise((resolve, reject) => {
  sbot.whoami((err, info) => {
    if (err) { reject(err); }
    resolve(info.id);
  });
});
