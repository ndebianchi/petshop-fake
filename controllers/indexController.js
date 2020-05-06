const { sequelize, Pet, Tipo, Raca } = require('../models')
const indexController = {
    
    index: (req, res) => {
        res.render('index');
    },

    painel: (req, res) => {
        res.render('painel')
    },

    painelSearch: async (req, res) => {
                
        let petsLista = await Pet.findAll({include: ['raca', 'tipo']})
        
        res.render('painel-search', {petsLista})       
    },

    painelAdd: async (req,res) => {
        let tiposLista = await Tipo.findAll()
        let racasLista = await Raca.findAll({include: 'tipo'})

        res.render('painel-add', {tiposLista, racasLista}) 
    },

    addPet: (req, res) => {
        let { nome, idade, foto, genero, tipo, raca } = req.body

        Pet.create({
            nome: nome,
            idade: idade,
            foto: `images/pets/${foto}.jpg`,
            genero: genero,
            tipo_id: parseInt(tipo, 10),
            raca_id: parseInt(raca, 10)
        })

        res.render('add-sucesso')
    }

}

module.exports = indexController;