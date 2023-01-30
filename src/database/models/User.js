module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idUser: {
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
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        firstName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
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
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        // tableName: "users",
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function(models){

        User.hasMany(models.Product, {
            foreignKey: "idUser",
            as: "products",
        })
    }

    return User
};