//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { getHome, notFound } from "./controllers/AppControllers.js";
import studentRoutes from "./routes/StudentRoutes.js";
import { checkAge } from "./middleware/StudentMiddleware.js";
import { errorHandler } from "./middleware/ErrorHandler.js";
dotenv.config();
//Environment variables
const PORT = process.env.PORT || 6060;

//Initialize Express app
const app = express();

//Use Some Express middleware
//================================================================
app.use(express.json()); //to enable json parsing
app.use(express.urlencoded({ extended: false })); // to enable url encoding
//================================================================

//Use Various Routes
//================================================================
app.use("/students", studentRoutes);
//================================================================

//make some default routes for main app
//================================================================
app.all("/", getHome); //for default app homepage route
app.all("*", notFound); // For invalid routes
//================================================================

//error handler
app.use(errorHandler);
// Server Listen on port
app.listen(PORT, () => {
    console.log(` Server is listening on ${PORT} `.bgGreen.blue.bold);
});
