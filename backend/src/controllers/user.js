const userModel = require("../module/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const createUser = ( async (req, res) => {
    const user = req.body;

    const takenUsername = await userModel.findOne({username: user.username});
    const takenEmail = await userModel.findOne({email: user.email});

    if (takenUsername || takenEmail) {
        res.json({message: "Username or Email has been already taken"});
    } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new userModel({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: hashedPassword
        })

        newUser.save();
        res.json({message: "success"});
    }
});

const getUser = ( async (req, res) => {
    const userLoggingIn = req.user;

    res.json('heloooo');
});


const loginUser = ( async (req, res) => {
    const userLoggingIn = req.body;
    console.log(userLoggingIn);
    
    userModel.findOne({username: userLoggingIn.username})
    .then(userFetched => {
        if(!userFetched) {
            return res.json({
                message: "invalid username or password"
            })
        }
        bcrypt.compare(userLoggingIn.password, userFetched.password)
        .then(isCorrect => {
            if(isCorrect){
                const payload = {
                    id: userFetched._id,
                    username: userFetched.username,
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if(err) return res.json({message: err})
                        return res.json({
                            message: "success",
                            token: "Bearer " + token 
                        })
                   }
                )
            } else {
                return res.json({
                    message: "Invalid Username or Password"
                })
            }
        })
    })
})

const logoutUser = (req, res) => {
    localStorage.removeItem('jwtToken');
    res.status(200).json({message: "user logged out", isLoggedOut: true})
}


module.exports = { createUser, loginUser, getUser, logoutUser }