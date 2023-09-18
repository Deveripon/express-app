import multer from "multer";
import path from "path";

//multer uplaod
//file limitations
const fileSize = 1000000; // 1mb
const dest = path.resolve("public");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        let fileExt = path.extname(file.originalname);
        let fileName =
            file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("_") +
            "_" +
            Math.floor(Math.random() * 1000000) +
            "_" +
            String(Date.now());

        cb(null, fileName + fileExt);
    },
});

export const uplaod = multer({
    storage: storage,
    limits: {
        fileSize: fileSize,
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "files") {
            if (
                file.mimetype === "application/msword" ||
                file.mimetype ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                file.mimetype === "application/pdf" ||
                file.mimetype === "text/html" ||
                file.mimetype === "text/javascript" ||
                file.mimetype === "text/plain"
            ) {
                cb(null, true);
            } else {
                cb(new Error(" File types not supported (only html js pdf doc docx are allowed"));
            }
        } else {
            if (
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/jpeg"
            ) {
                cb(null, true);
            } else {
                cb(new Error(" File types not supported (only jpg png or jpeg are allowed"));
            }
        }
    },
});
