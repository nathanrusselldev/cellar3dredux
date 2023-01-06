const { Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');

class Bottle extends Model {}

Bottle.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
       type: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       vintage: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       locale: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       body: {
           type: DataTypes.STRING,
           allowNull: true,
        },
       notes: {
           type: DataTypes.STRING,
           allowNull: true,
        },
    },
    {
        sequelize,
        timeStamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'bottle'
    }
)

module.exports = Bottle