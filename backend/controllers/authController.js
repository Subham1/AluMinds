const User = require("../models/User");

exports.loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = new User({ email, loginTime: new Date() });
    await user.save();
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

exports.logoutUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { logoutTime: new Date() },
      { new: true }
    );
    res.status(200).json({ message: "Logout successful", user });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error });
  }
};
