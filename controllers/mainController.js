const path=require('path')

const mainController = {
    index:(req, res) => {
        res.render('index')
    },

    productDetail:(req, res) => {
        res.render('productDetail')
    },

    register:(req, res) => {
        res.render('register')
    },

    login:(req, res) => {
        res.render('login')
    },

    productCart:(req, res) => {
        res.render('productCart')
    },

    addProduct:(req, res) => {
        res.render('addProduct')
    },
}

module.exports=mainController