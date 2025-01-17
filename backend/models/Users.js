const { Sequelize, DataTypes } = require("sequelize");
const conexionDB = require('../config/db')



const Users = conexionDB.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt',
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt'
    }
},{
    timestamps: false
});

module.exports = Users;