import multer from "multer";

export const errorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(500).send("There was an error on File Upload");
    } else {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send("success");
        }
    }
};
