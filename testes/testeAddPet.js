const { sequelize, Pet } = require('../models')

Pet.create({
    nome: 'Murilo',
    idade: 10,
    foto: 'images/pets/Persa.jpg',
    genero: 'Macho',
    tipo_id: 1,
    raca_id: 2
})