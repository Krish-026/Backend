import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        // learn more about file.originalname
        // gets the original name of the uploaded file
        cb(null, file.originalname);
    },
});

export const upload = multer({ storage: storage });