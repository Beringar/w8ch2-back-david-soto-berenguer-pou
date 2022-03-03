const Tuit = require("../../db/models/Tuit");

const getAllTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find({});
    res.json({ tuits });
  } catch (error) {
    next(error);
  }
};

const createTuit = async (req, res, next) => {
  const tuit = req.body;
  try {
    const newtuit = await Tuit.create(tuit);
    res.status(201);
    res.json(newtuit);
  } catch (error) {
    error.message = "Bad request, no tuit was posted";
    error.code = 400;
    next(error);
  }
};

module.exports = {
  getAllTuits,
  createTuit,
};
