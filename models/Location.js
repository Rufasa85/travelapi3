const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Location model
class Location extends Model {}

Location.init({
    location_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
}, { sequelize });

module.exports = Location;
