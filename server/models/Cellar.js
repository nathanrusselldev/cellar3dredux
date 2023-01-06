const { Model, DataTypes} = require ('sequelize');
const sequelize = require ('../config/connection');

class Cellar extends Model {}

Cellar.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cellarHeight: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        cellarWidth: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timeStamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'cellar'
    }
)

module.exports = Cellar