const Message = require("../models/message.model");
const wrap = require("express-async-error-wrapper");
const sendMail = require("../helpers/mailer");

// @route   GET api/messages
// @desc    Get all messages
// @access  Admin
exports.getMessages = wrap(async (req, res) => {
  const messages = await Message.find().sort({ replied:1, createdAt: -1});
  return res.status(200).json({
    success: true,
    count: messages.length,
    data: messages
  });
});

// @route   POST api/messages
// @desc    Create a message
// @access  Public
exports.createMessage = wrap(async (req, res) => {
  const { contact_name, contact_email, subject, message } = req.body;
  const newMessage = new Message({
    contact_name,
    contact_email,
    subject,
    message
  });
  const savedMessage = await newMessage.save();
  return res.status(201).json({
    success: true,
    data: savedMessage
  });
});


// @route   POST api/messages/:id/answer
// @desc    Answer a message
// @access  Admin
exports.answerMessage = wrap(async (req, res) => {
  const { id } = req.params;
  const answer = req.body.answer;
  const message = await Message.findById(id);
  if (!message) {
    return res.status(404).json({
      success: false,
      error: "message not found"
    });
  }

  message.answer = req.body.answer;
  message.replied = true;
  await message.save();
  sendMail(
    message.contact_email,
    answer,
    `Merhabalar ${message.contact_name},`
  );
  return res.status(200).json({
    success: true,
    data: message
  });
});

exports.getMessage = wrap(async (req, res) => {
  const {id} = req.params;
  const message = await Message.findById(id);
  if (!message) {
    return res.status(404).json({
      success: false,
      error: "message not found"
    });
  }

  return res.status(200).json({
    success: true,
    data: message
  });
})

