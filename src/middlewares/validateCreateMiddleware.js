const path = require('path')
const {body}=require('express-validator')

module.exports = [
    body('name').notEmpty().withMessage('Escribir nombre'),
    body('description').notEmpty().withMessage('Escribir descripcion'),
    body('price')
        .notEmpty().withMessage('Escribir precio').bail()
        .isInt().withMessage('debe ser un numero'),
    body('idColors').notEmpty().withMessage('Seleccionar color'),
    body('category').notEmpty().withMessage('Seleccionar categoria'),
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones de archivo permitido son ${acceptedExtensions.join(', ')}');
            }
        }
        return true
    })
]