import AboutMessage from './message/about/type.graphql';
import Channel from './channel/type.graphql';
import ChannelMessage from './message/channel/type.graphql';
import ContactMessage from './message/contact/type.graphql';
import DefaultMessage from './message/default/type.graphql';
import Message from './message/type.graphql';
import PostMessage from './message/post/type.graphql';
import Query from './query/type.graphql';
import User from './user/type.graphql';

const Schema = `
  schema {
    query: Query
  }
`;

export default [
  AboutMessage,
  Channel,
  ChannelMessage,
  ContactMessage,
  DefaultMessage,
  Message,
  PostMessage,
  Query,
  Schema,
  User,
]
