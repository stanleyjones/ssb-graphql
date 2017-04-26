export default `
  type Post implements Message {
    content: String
    key: String!
    sequence: Int!
    text: String
    timestamp: Float!
    type: String!
  }
`
