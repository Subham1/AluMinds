const express = require("express");
const { signupUser, loginUser, logoutUser, ensureAuth } = require("../controllers/authController");
const { validateSignup } = require("../middlewares/validation");

const router = express.Router();

router.post("/signup", validateSignup, signupUser);
router.post("/login", loginUser);
router.post("/logout", ensureAuth, logoutUser);

module.exports = router;
