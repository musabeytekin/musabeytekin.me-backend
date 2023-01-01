const express = require("express");
const router = express.Router();
const messageRoute = require("./message.route");
const authRoute = require("./auth.route");
const skillsRoute = require("./skills.route");
const resumeItemRoute = require("./resumeItem.route");

// @route GET api/messages
// @desc Get all messages
// @access Admin
router.use("/messages", messageRoute);

// @route POST api/auth/login
// @desc Login admin
// @access Public
router.use("/auth", authRoute)

// @route GET api/skills
// @desc Get all skills
// @access Admin
router.use("/skills", skillsRoute);

// @route GET api/resumeItems
// @desc Get all resumeItems
// @access Admin, Public
router.use("/resumeItems", resumeItemRoute);

module.exports = router;