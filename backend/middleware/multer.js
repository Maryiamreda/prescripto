import multer from 'multer'

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage })
export default upload;
//This code sets up file upload handling using Multer,a middleware for handling multipart/form-data.
//  It configures where and how uploaded files will be stored, keeping their original filenames.

