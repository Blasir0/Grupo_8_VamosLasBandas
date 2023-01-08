const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + '-' + path.extname(file.originalname)
        cb(null, fileName)
    }
})

const uploadUser = multer({ storage: storage })

module.exports = uploadUser