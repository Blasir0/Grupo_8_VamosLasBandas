module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        idColors: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // createdAt:{
        //     type: dataTypes.DATE
        // },
        // updatedAt:{
        //     type: dataTypes.DATE
        // },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
    };
    let config = {
        // tableName: "colors",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Color = sequelize.define(alias, cols, config); 

    Color.associate = function(models){

        Color.hasMany(models.Product, {
            foreignKey: "idColors",
            as: "products",
        })
    }

    return Color
};