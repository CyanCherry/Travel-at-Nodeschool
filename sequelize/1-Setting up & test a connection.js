const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    operatorsAliases: false
});

// Run
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// FLUSH privileges;
// to fix SequelizeConnectionError:
// Client does not support authentication protocol requested by server;
// consider upgrading MySQL client

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
