import { getHistory } from '../message/helpers';
import { getId, getProfile } from '../user/helpers';

export default {
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  profile: (_, { id }, { sbot }) => getProfile({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
}
