const User = require('./2-Your first model');

// User.create({firstName: 'Cyan', lastName: 'Cherry'});
User.destroy({where: {firstName: 'John'}});
User.findAll()
    .then((dataSet) => {
        dataSet.map((data) => {
            console.log(data.dataValues)
        })
    });

