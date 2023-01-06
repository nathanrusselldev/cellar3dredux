
const typeDefs = `#graphql
  type User {
    id: ID
    first_name: String
    last_name: String
    email: String
    username: String
    password: String
  }
  type Cellar {
    id: ID
    name: String
    cellarHeight: Int
    cellarWidth: Int
  }
  type Position {
    id: ID
    binNumber: Int
    hasBottle: Boolean
  }
  type Bottle {
    id: ID
    name: String
    type: String
    vintage: String
    locale: String
    body: String
    notes: String
  }
  type Query {
    users: [User]!
    cellars: [Cellar]!
    bottles: [Bottle]!
    positions: [Position]!
    hello: String
  }
`;

module.exports = typeDefs

