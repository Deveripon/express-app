import sendSms from "bulkmessage";
import { verificationMail } from "../emails/VerificationEmail.js";
import { welcomeEmail } from "../emails/WelcomeEmail.js";
export const getStudent = (req, res) => {
    res.status(200).json({
        pageTitle: "Student Home Page",
        description: "This is the home page from Student routes",
        message: "Get Student data from Student Route successfully",
        path: "/student/",
        statusCode: 200,
    });
};

export const createStudent = (req, res) => {
    sendSms("rcvhoqrAmkxEWrfyYIKQ", req.body.cell, "this is test message");
    verificationMail(req, res);
    welcomeEmail(req, res);
    res.status(201).send(req.body);
};

export const addNew = (req, res) => {
    res.status(200).json(req.file);
};
