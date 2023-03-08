const { User, Cellar, Position, Bottle } = require('../models');


const resolvers = {
    Query: {
      users: async () => User.findAll(),
      user: async (parent, { username }) => User.findOne({ username }),
      cellars: async () => Cellar.findAll,
      bottles: async () => Bottle.findAll,
      positions: async () => Position.findAll,
      hello: () => 'world',
    },
    Mutation: {
      createUser: async (parent, args, context, info) => {
        const user = await User.create(args);
        return { user: await User.findByPk(user.id)}
      },
    }
  };

module.exports = resolvers;