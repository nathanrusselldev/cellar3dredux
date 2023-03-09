const { User, Cellar, Position, Bottle } = require('../models');


const resolvers = {
    Query: {
      users: async () => User.findAll(),
      user: async (parent, { username }) => User.findOne({ username }),
      cellars: async () => Cellar.findAll(),
      cellar: async (parent, {cellar_id }) => Cellar.findOne(
        { cellar_id,
          include: [Position]
        }),
      bottles: async () => Bottle.findAll(),
      positions: async () => Position.findAll(),
      hello: () => 'world',
    },
    Mutation: {
      createUser: async (parent, args, context, info) => {
        const user = await User.create(args);
        return { user: await User.findByPk(user.id)}
      },
      createCellar: async(parent, args, context, info) => {
        console.log(args)
        const totalPositions = args.cellarHeight * args.cellarWidth
        console.log(totalPositions)
        const newCellar = await Cellar.create({
          name: args.name,
          cellarHeight: args.cellarHeight,
          cellarWidth: args.cellarWidth
        })
        for (let i = 0; i < totalPositions; i++) {
          let thisPosition = await Position.create({
              binNumber: Math.floor(Math.random()* 1000) + 1,
              cellar_id: newCellar.id,
              hasBottle: false
          })
          console.log(thisPosition)
        }
        console.log(newCellar)
        return newCellar
      },
    }
  };

module.exports = resolvers;