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
Cellar.hasMany(Bottle)
Bottle.belongsTo(Cellar)

Bottle.hasOne(Position, {
    foreignKey: 'bottle_id'
})
Position.hasOne(Bottle, {
    foreignKey: 'position_id'
})
module.exports = { User, Cellar, Position, Bottle }