const express = require("express");
const router = express.Router();
const {
  getMessages,
  createMessage,
  answerMessage, 
  getMessage
} = require("../controllers/message.controller");
const { adminAccess } = require("../middlewares/auth.middleware");
router.get("/", adminAccess, getMessages);
router.get("/:id", adminAccess, getMessage);
router.post("/:id/answer", adminAccess, answerMessage);
router.post("/", createMessage);

module.exports = router;