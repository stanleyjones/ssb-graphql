export default `
  type ContactMessage implements Message {
    contact: String!
    content: String
    following: Boolean!
    key: String!
    sequence: Int!
    timestamp: Float!
    type: String!
  }
`
