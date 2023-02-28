// const multer = require('multer')
import multer from "multer"
import path from "path"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/storage/imgs')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
// const fileFilter = function (req, file, cb) {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }
// const upload = multer({ storage: storage, fileFilter: fileFilter });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './img')
//     },
//     filename: function (req, file, cb) {
//         // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         // cb(null, file.fieldname + '-' + uniqueSuffix)

//         cb(null, file.fieldname + '-' + Date.now())

//         // cb(null, `${file.fieldname} - ${Date.now()}`)

//         // cb(null, `${Date.now()} - ${path.extname(file.originalname)}`)
//     }
// })

const upload = multer({ storage: storage })
export default upload

// // module.exports = upload
// // exports.upload = upload.single('imagePath')
// // exports.uploadFile = (req, res) => {res.send({data:'enviar archivo'})}

