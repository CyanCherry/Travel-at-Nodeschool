const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    pool: {max: 5, min: 0, idle: 10000},
    operatorsAliases: false
});

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
// User.sync({force: true})
User.sync({force: false})
    .then(() => {
        return User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });