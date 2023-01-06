const { Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');

class Position extends Model {}

Position.init(
    {
        binNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hasBottle: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    },
    {
        sequelize,
        timeStamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'position'
    }
)

module.exports = Position