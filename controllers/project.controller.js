const Project = require("../models/project.model");
const wrap = require("express-async-error-wrapper");

// @route   GET api/projects
// @desc    Get all projects
// @access  Public

const read = wrap(async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
});

// @route   POST api/projects
// @desc    Create a project
// @access  Admin

const create = wrap(async (req, res) => {
    const { title, description, image, url } = req.body;
    const newProject = new Project({
        title,
        description,
        image,
        url
    });
    const savedProject = await newProject.save();
    return res.status(201).json({
        success: true,
        data: savedProject
    });
    }
);

// @route   PUT api/projects/:id
// @desc    Update a project
// @access  Admin

const update = wrap(async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
        return res.status(404).json({
            success: false,
            error: "Project not found"
        });
    }
    project.title = req.body.title;
    project.description = req.body.description;
    project.image = req.body.image;
    project.url = req.body.url;
    await project.save();
    return res.status(200).json({
        success: true,
        data: project
    });
});

// @route   DELETE api/projects/:id
// @desc    Delete a project
// @access  Admin

const remove = wrap(async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
        return res.status(404).json({
            success: false,
            error: "Project not found"
        });
    }
    await project.remove();
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
