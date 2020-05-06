const Raca = (sequelize, DataTypes) => {

   let raca = sequelize.define('Raca', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },{
        tablename: 'racas',
        timestamps: false
    })

    raca.associate = (models) => {
        raca.belongsTo(models.Tipo, {foreignKey: 'tipo_id', as: 'tipo'})
    }

    return raca;

}

module.exports = Raca;
