const express = require("express");
const router = express.Router();
const {
  read,
  create,
  update,
  remove
} = require("../controllers/resumeItem.controller");
const { adminAccess } = require("../middlewares/auth.middleware");
const upload = require("../helpers/multer.helper");

router.get("/", read);
router.post("/", [adminAccess, upload.array("images", 12)], create);
router.put("/:id", [adminAccess, upload.array("images", 12)], update);
router.delete("/:id", adminAccess, remove);

module.exports = router;