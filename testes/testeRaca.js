const { sequelize, Raca, Tipo } = require('../models')

Raca.findAll({include: 'tipo'}).then(
    data => {
        console.log(data.map(p => p.toJSON()));
        sequelize.close();
    }
)