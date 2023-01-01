const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillsSliceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of skills is required"]
    },

    description: {
      type: String,
      required: [true, "Description of skills is required"]
    },

    skills: [
      {
        name: {
          type: String,
          required: [true, "Name of skill is required"]
        },

        level: {
          type: Number,
          required: [true, "Level of skill is required"]
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("SkillsSlice", SkillsSliceSchema);
