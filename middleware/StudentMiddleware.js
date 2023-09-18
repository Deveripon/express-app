export const checkAge = (req, res, next) => {
    if (req.body.gender === "male" && req.body.age >= 21) {
        next();
    } else if (req.body.gender === "female" && req.body.age >= 18) {
        next();
    } else {
        res.status(403).json({
            message: "Error: Students are underaged",
            path: "/student/",
            statusCode: 403,
            source: "checkAge Middleware Error",
        });
    }
};
