

const typeDefs = `#graphql
  type User {
    id: ID
    first_name: String
    last_name: String
    email: String
    username: String
    password: String
  } 
  type Query {
    users: [User]!
    hello: String
  }
`;

module.exports = typeDefs

