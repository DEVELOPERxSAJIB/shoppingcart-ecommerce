const multer = require("multer");

// create storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.floor(Math.random() * 10000000) + " " + file.fieldname
    );
  },
});

const productsPhotoUpload = multer({storage}).array("products-photo", 5);
const userAvatar = multer({storage}).single("avatar");

module.exports = {
  productsPhotoUpload,
  userAvatar
};
