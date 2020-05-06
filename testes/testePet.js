const { sequelize, Pet } = require('../models')

Pet.findAll({include: ['raca', 'tipo']}).then(
    data => {
        console.log(data.map(p => p.toJSON()));
        sequelize.close();
    }
)