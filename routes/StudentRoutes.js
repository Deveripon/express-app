//load express
import express from "express";
import { addNew, createStudent, getStudent } from "../controllers/StudentController.js";
import { checkAge } from "../middleware/StudentMiddleware.js";
import { uplaod } from "../middleware/MulterUploader.js";

//multer configuration

//initialize students router
const studentRoutes = express.Router();

// Make various request from various routes
studentRoutes.get("/", getStudent);
studentRoutes.post("/", checkAge, createStudent);
studentRoutes.post("/add", uplaod.single("image"), addNew);

export default studentRoutes;
