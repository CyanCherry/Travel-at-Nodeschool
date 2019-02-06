const Sequelize = require('sequelize');
const sequelize = require('./1-Setting up & test a connection');

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
        console.log('Model has been synced successfully.');
        // return User.create({
        //     firstName: 'John',
        //     lastName: 'Hancock'
        // });
    })
    .catch(err => {
        console.error('Failed to create the model:', err);
    });

module.exports = User;
