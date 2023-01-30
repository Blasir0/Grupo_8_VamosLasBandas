module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        idProduct: {
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
        description: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        idColors: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        }
    };
    let config = {
        // tableName: "products",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = (models) => {

        Product.belongsTo(models.Color, {
            foreignKey: "idColors",
            as: "color",
        })

    }

    return Product
};