const wrap = require("express-async-error-wrapper");

// @route POST api/admin/login
// @desc Login admin
// @access Public

exports.login = wrap(async (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.cookie("token", process.env.ADMIN_TOKEN, {
      httpOnly: false,
      withCredentials: true
    }).status(200).json({
      success: true,
      token: process.env.ADMIN_TOKEN
    });

  } else {
    return res.status(401).json({
      success: false,
      error: "Invalid credentials"
    });
  }
});