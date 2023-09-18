export const getHome = (req, res) => {
    res.status(200).json({
        pageTitle: "Home",
        description: "This is the home page from app routes",
        message: "App Main Route respons successfully",
        statusCode: 200,
    });
};
export const notFound = (req, res) => {
    res.status(404).json({
        pageTitle: "Not Found",
        description: "Not Found",
        message: "invalid request sent",
        statusCode: 404,
    });
};
