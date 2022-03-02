const Tuit = require("../../db/models/Tuit");

const getAllTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find({});
    res.json({ tuits });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTuits,
};
