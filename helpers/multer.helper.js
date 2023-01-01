const multer = require("multer");
const path = require("path");

const CustomError = require("./CustomError");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimes = ["image/jpeg", "image/png", "image/jpg"];

  if (!allowedMimes.includes(file.mimetype)) {
    return cb(new CustomError("Please provide a valid image file", 400), false);
  }

  cb(null, true);
};

// const limits = {
//   fileSize: 1024 * 1024 * 5,

// };

const upload = multer({
  storage,
  fileFilter
});

module.exports = upload;
