const User = require('./2-Your first model');

async function three() {
    await User.create({firstName: 'Cyan', lastName: 'Cherry'});

    let dataSet = await User.findAll();
    dataSet.map((data) => {
        console.log(data.dataValues)
    });

    User.destroy({where: {firstName: 'Cyan'}});
}

three();