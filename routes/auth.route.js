const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth.controller");



// @route POST api/admin/login
// @desc Login admin
// @access Public
router.post("/login", login);

module.exports = router;