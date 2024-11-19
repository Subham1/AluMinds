const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Middleware to ensure authentication
exports.ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

// Signup logic
exports.signupUser = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      name,
      password: hashedPassword,
    });

    await user.save();

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Signup successful, but login failed", err });
      }
      res.status(201).json({ message: "Signup and login successful", user });
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error });
  }
};

// Login logic
exports.loginUser = (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) return res.status(500).json({ message: "Authentication error", err });
    if (!user) return res.status(400).json({ message: info.message });

    req.login(user, async (loginErr) => {
      if (loginErr) return res.status(500).json({ message: "Login failed", loginErr });

      user.loginTime = new Date();
      await user.save();

      res.status(200).json({ message: "Login successful", user });
    });
  })(req, res, next);
};

// Logout logic
exports.logoutUser = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const { email } = req.user;

    await User.findOneAndUpdate(
      { email },
      { logoutTime: new Date() },
      { new: true }
    );

    req.logout((err) => {
      if (err) return res.status(500).json({ message: "Logout failed", err });
      res.status(200).json({ message: "Logout successful" });
    });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error });
  }
};
