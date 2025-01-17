const { Sequelize } = require('sequelize');
const colors = require('colors')
require('dotenv').config({ path: '.env' });



const conexionDB = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,
    { host: process.env.DB_HOST, dialect: 'mysql' });
    
    conexionDB.authenticate().then(() => {
        console.log(colors.bgGreen.underline('Connection has been established successfully.'));
    }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });


module.exports = conexionDB;