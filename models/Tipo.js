const Tipo = (sequelize, DataTypes) => {

    return sequelize.define('Tipo', {
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
        tablename: 'tipos',
        timestamps: false
    })

}

module.exports = Tipo;
