const skillsSlice = require("../models/skillsSlice.model");
const wrap = require("express-async-error-wrapper");

const read = wrap(async (req, res) => {
  const data = await skillsSlice.find();
  return res.status(200).json({
    success: true,
    count: data.length,
    data
  });
});

const readById = wrap(async (req, res) => {
  const data = await skillsSlice.findById(req.params.id);
  return res.status(200).json({
    success: true,
    count: data.length,
    data
  });
});

const create = wrap(async (req, res) => {
  const { name, description, skills } = req.body;
  const newSkillsSlice = new skillsSlice({
    name,
    description,
    skills
  });
  const data = await newSkillsSlice.save();
  return res.status(201).json({
    success: true,
    count: data.length,
    data
  });
});

const update = wrap(async (req, res) => {
  const { name, description, skills } = req.body;
  console.log(name, description, skills);
  const data = await skillsSlice.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      skills
    },
    { new: true, runValidators: true }
  );
  return res.status(200).json({
    success: true,
    count: data.length,
    data
  });
});

const remove = wrap(async (req, res) => {
  const data = await skillsSlice.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    count: data.length,
    data
  });
});

module.exports = {
  read,
  readById,
  create,
  update,
  remove
};
