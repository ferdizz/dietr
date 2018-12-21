const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: err.message
                });
            }
            req.userData = decoded;
            next();
        });
    } catch (error) {
        return res.status(401).json({
            message: "Invalid access token"
        });
    }
};
