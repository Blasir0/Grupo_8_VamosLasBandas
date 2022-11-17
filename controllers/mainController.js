let productos=[
    {
        id:1,
        titulo:"Bajos",
        imagen:"img/Bajo.jpg",
    },
    {
        id:2,
        titulo:"Baterias",
        imagen:"img/bateria.jpg",
    },
    {
        id:3,
        titulo:"Guitarras Electricas",
        imagen:"img/guitarraelectrica.jpg",
    },
    {
        id:4,
        titulo:"Microfonos",
        imagen:"img/microfono.jpeg",
    },
];

let salas = [
    {
        id:1,
        titulo:"Sala de Ensayo 1",
        imagen:"img/Saladeensayo1.webp",
    },
    {
        id:2,
        titulo:"Sala de Ensayo 2",
        imagen:"img/Saladeensayo2.jpg",
    },
    {
        id:3,
        titulo:"Sala de Ensayo 3",
        imagen:"img/Saladeensayo3.jpg",
    },
]

const mainController = {
    index:(req, res) => {
        res.render('index',{productos,salas})
    },

    productDetail:(req, res) => {
        res.render('productDetail',{productos,salas})
    },

    register:(req, res) => {
        res.render('register',{productos,salas})
    },

    login:(req, res) => {
        res.render('login',{productos,salas})
    },

    productCart:(req, res) => {
        res.render('productCart',{productos,salas})
    },

    addProduct:(req, res) => {
        res.render('addProduct',{productos,salas})
    },
}

module.exports=mainController