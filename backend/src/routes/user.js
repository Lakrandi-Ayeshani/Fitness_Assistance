const express = require("express");
const router = express.Router();
const { createUser, loginUser, getUser, logoutUser } = require("../controllers/user.js");
const { verifyJWT } = require('../middleware/authMiddleware.js');
const { showScreen } = require("../middleware/screenAuthMiddleware.js");

router.post('/register', createUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser)

router.get("/info", verifyJWT, getUser);

router.get('/auth', showScreen)

module.exports = { registerRouter : router }