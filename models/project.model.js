const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"]
    },
    description: {
      type: String,
      required: [true, "Description is required"]
    },
    live_link: {
      type: String,
      required: [true, "Live link is required"]
    },
    github_link: {
      type: String,
      required: [true, "Github link is required"]
    },
    images: [
      {
        type: String,
        required: [true, "Image is required"]
      }
    ],
    technologies: [
      {
        name: {
          type: String,
          required: [true, "Name is required"]
        }
      }
    ]
  },
  {
    timestamps: true
  }
);
