const multer = require('multer');
const path = require('path');

const  storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, 'uploads');
    },
    filename : function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
 const upload =  multer({
    storage : storage,
    limits: {fileSize : 10 * 1024 *1024}
 }).single('imagen del usuario por aqui se recibira el archivo en el body');

 module.exports = {
    //esto se debe inportar 
    upload
 }