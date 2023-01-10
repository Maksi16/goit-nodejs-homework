const getCurrent = async (req, res) => {
  try {
    const { email, subscription } = req.user;
    res.status(201).json({
      email,
      subscription,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrent;
