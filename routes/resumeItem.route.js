const express = require("express");
const router = express.Router();
const {
  read,
  create,
  update,
  remove
} = require("../controllers/resumeItem.controller");
const { adminAccess } = require("../middlewares/auth.middleware");

router.get("/", read);
router.post("/", adminAccess, create);
router.put("/:id", adminAccess, update);
router.delete("/:id", adminAccess, remove);

module.exports = router;
