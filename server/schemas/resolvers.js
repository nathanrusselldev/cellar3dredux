const { User } = require('../models');


const resolvers = {
    Query: {
      users: async () => {
        return User.findAll()
      },
      hello: () => 'world',
    },
  };

module.exports = resolvers;