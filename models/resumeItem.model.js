const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResumeItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"]
    },
    description: {
      type: String,
      required: [true, "Description is required"]
    },
    date_range: {
      type: String,
      required: [true, "Date is required"]
    },

    items: [
      {
        description: {
          type: String,
          required: [true, "Description is required"]
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("ResumeItem", ResumeItemSchema);
