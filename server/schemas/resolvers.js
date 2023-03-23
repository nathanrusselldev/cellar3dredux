const { User, Cellar, Position, Bottle } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      users: async () => User.findAll(),
      user: async (parent, { username }) => User.findOne({ username }),
      cellars: async () => Cellar.findAll(),
      cellar: async (parent, { cellar_id }) => Cellar.findOne(
        { where: cellar_id,
          include: [Position], 
        }),
      bottles: async () => Bottle.findAll(),
      positions: async () => Position.findAll({include: Bottle}),
      position: async (parent, {position_id}) => Position.findOne({where: position_id, include: Bottle}),
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
        const newCellar = await Cellar.create({
          name: args.name,
          cellarHeight: args.cellarHeight,
          cellarWidth: args.cellarWidth
        })
        let bin = 1001
        let widthIterator = 0
        let column = 1
        for (let i = 0; i < totalPositions; i++) {
          if (widthIterator === args.cellarWidth) {
            column ++
            widthIterator = 0
            bin = 1000 * column + 1
          }
          await Position.create({
              binNumber: bin,
              cellar_id: newCellar.id,
              hasBottle: false
          })
          widthIterator ++
          bin ++
          console.log(widthIterator)
        }
        console.log(newCellar)
        return newCellar
      },
      createBottle: async(parent, args) => {
        console.log(args)
        const bottle = await Bottle.create({
          name: args.name,
          type: args.type,
          vintage: args.vintage,
          locale: args.locale,
          body: args.body,
          notes: args.notes,
          drank: false,
          position_id: args.position,
          cellar_id: args.cellar
        })
        console.log(bottle)
        const positionData = await Position.update(
          { bottle_id: bottle.id },
          { where: { id: args.position }
          })
        return {bottle, positionData}
      },
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        console.log(token)
        return { token, user };
      },
    }
  };

module.exports = resolvers;