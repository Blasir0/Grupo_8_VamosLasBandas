const path = require('path')
const {body}=require('express-validator')

module.exports = [
    body('firtName').notEmpty().withMessage('Escribir nombre'),
    body('lastName').notEmpty().withMessage('Escribir apellido'),
    body('email')
        .notEmpty().withMessage('Escribir correo electronico').bail()
        .isEmail().withMessage('El formato debe ser de correo electronico'),
    body('password').notEmpty().withMessage('Escribir contraseña'),
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