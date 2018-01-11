# ssb-graphql
A GraphQL server for Secure Scuttlebutt (SSB)

---

`ssb-graphql` is a collection of [GraphQL](http://graphql.org/) schema, queries, and mutations that make it easier for clients to work with [Scuttlebot](http://scuttlebot.io/). Ask only for what you need, when you need it.

Example request:
```
query {
  profile (key: '@...') {
    name
    messages { key }
    channels { name }
  }
}
```

Example response:
```
profile {
  name: 'Stanley'
  messages: [
    { key: '@...' }
    { key: '@...' }
    { key: '@...' }
  ]
  channels: [
    { name: 'scuttlebutt' }
    { name: 'solarpunk' }
  ]
}
```

There is also a GraphiQL client that lets you explore the schema.
