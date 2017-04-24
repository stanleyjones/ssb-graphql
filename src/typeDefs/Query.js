export default `
  type Query {
    userStream(id: String): [Message]
    whoami: String
  }
`
