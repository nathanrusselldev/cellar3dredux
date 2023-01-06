const { User, Cellar, Position, Bottle } = require('../models');


const resolvers = {
    Query: {
      users: async () => User.findAll(),
      cellars: async () => Cellar.findAll,
      bottles: async () => Bottle.findAll,
      positions: async () => Position.findAll,
      hello: () => 'world',
    },
  };

module.exports = resolvers;