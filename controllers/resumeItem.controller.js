const wrap = require("express-async-error-wrapper");
const ResumeItem = require("../models/resumeItem.model");

const read = wrap(async (req, res) => {
  const resumeItems = await ResumeItem.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    count: resumeItems.length,
    data: resumeItems
  });
});

const create = wrap(async (req, res) => {
  const { title, description, date_range, items } = req.body;
  const newResumeItem = new ResumeItem({
    title,
    description,
    date_range,
    items
  });
  const savedResumeItem = await newResumeItem.save();
  return res.status(201).json({
    success: true,
    data: savedResumeItem
  });
});

const update = wrap(async (req, res) => {
  const { id } = req.params;
  const resumeItem = await ResumeItem.findById(id);
  if (!resumeItem) {
    return res.status(404).json({
      success: false,
      error: "ResumeItem not found"
    });
  }
  resumeItem.title = req.body.title;
  resumeItem.description = req.body.description;
  resumeItem.date_range = req.body.date_range;
  resumeItem.items = req.body.items;
  await resumeItem.save();
  return res.status(200).json({
    success: true,
    data: resumeItem
  });
});

const remove = wrap(async (req, res) => {
  const { id } = req.params;
  const resumeItem = await ResumeItem.findById(id);
  if (!resumeItem) {
    return res.status(404).json({
      success: false,
      error: "ResumeItem not found"
    });
  }
  await resumeItem.remove();
  return res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  read,
  create,
  update,
  remove
};
