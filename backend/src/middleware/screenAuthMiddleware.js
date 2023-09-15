const jwt = require("jsonwebtoken");

const showScreen = (req, res, next) => {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            res.json({isLoggedIn: true});
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}

module.exports = { showScreen };
