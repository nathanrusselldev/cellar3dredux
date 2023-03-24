
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
    positions: [Position]
  }
  type Position {
    id: ID
    binNumber: Int
    hasBottle: Boolean
    bottle: Bottle
  }
  type Bottle {
    id: ID
    name: String
    type: String
    vintage: String
    locale: String
    body: String
    notes: String
    drank: Boolean
    position: Position
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]!
    user(username: String!): User
    cellars: [Cellar]!
    cellar(cellar_id: Int): Cellar
    bottles: [Bottle]!
    positions: [Position]!
    position(position_id: Int): Position
    hello: String
  }
  type Mutation {
    createUser(username: String!, email: String!, first_name: String!, last_name: String!, password: String!): Auth!
    createCellar(name: String!, cellarHeight: Int!, cellarWidth: Int!): Cellar
    createBottle(name: String, type: String, vintage: String, locale: String, body: String, notes: String, cellar: Int, position: Int): Bottle
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs

