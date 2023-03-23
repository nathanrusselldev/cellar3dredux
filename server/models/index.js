const User = require('./User');
const Cellar = require('./Cellar')
const Position = require('./Position')
const Bottle = require('./Bottle')

User.hasOne(Cellar, {
    foreignKey: 'user_id'
})
Cellar.belongsTo(User, {
    foreignKey: 'user_id'
})
Cellar.hasMany(Position, {
    foreignKey: 'cellar_id'
})
Bottle.hasOne(Position, {
    foreignKey: 'bottle_id'
})
Bottle.belongsTo(Position, {
    foreignKey: 'position_id'
})

module.exports = { User, Cellar, Position, Bottle }