const Pet = (sequelize, DataTypes) => {


    let pet = sequelize.define('Pet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },{
        tablename: 'pets',
        timestamps: false
    })

    pet.associate = (models) => {
        pet.belongsTo(models.Raca, {foreignKey:'raca_id', as: 'raca'})     
        pet.belongsTo(models.Tipo, {foreignKey:'tipo_id', as: 'tipo'})   
    }

    return pet;

}

module.exports = Pet;
