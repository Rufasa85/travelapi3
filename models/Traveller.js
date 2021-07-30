const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Traveller model
class Traveller extends Model {}

Traveller.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    }
}, { sequelize });

module.exports = Traveller;
