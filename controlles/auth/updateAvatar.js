const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/users");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { path: tempUpload, filename } = req.file;
    const newFileName = `${_id}_${filename}`;
    const resultUpload = path.join(avatarsDir, newFileName);

    const image = await Jimp.read(tempUpload);
    image.resize(250, 250);
    image.writeAsync(resultUpload);

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatars", newFileName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
  } catch (error) {
    next(error);
  }
};

module.exports = updateAvatar;
