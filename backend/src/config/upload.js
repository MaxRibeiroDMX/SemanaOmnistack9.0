const multer = require('multer');//Multer is a module to deal with multipart form
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination:path.resolve(__dirname,'..','..','uploads'),
        filename:(req,file,callback)=>{
            callback(null,`${file.fieldname}-${Date.now()})${path.extname(file.originalname)}`);
        },
    }),
};