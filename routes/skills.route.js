const express = require("express");
const router = express.Router();
const {create, read, readById, update, remove} = require("../controllers/skills.controller");
const { adminAccess } = require("../middlewares/auth.middleware");

// @route GET api/skills
// @desc Get all skills
// @access Public
router.get("/", read);

// @route GET api/skills/:id
// @desc Get a skills
// @access Admin
router.get("/:id", readById);


// @route POST api/skills
// @desc Create a skills
// @access Admin
router.post("/",adminAccess, create);

// @route PUT api/skills/:id
// @desc Update a skills
// @access Admin
router.put("/:id",adminAccess, update);

// @route DELETE api/skills/:id
// @desc Delete a skills
// @access Admin
router.delete("/:id",adminAccess, remove);


module.exports = router;