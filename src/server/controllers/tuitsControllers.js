const Tuit = require("../../db/models/Tuit");

const getAllTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find({});
    if (!tuits) {
      const error = new Error("No tuits found");
      error.code = 404;
      next(error);
      return;
    }
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

const deleteTuit = async (req, res, next) => {
  const { id } = req.params;
  const response = await Tuit.findByIdAndDelete(id);
  if (!response) {
    const error = new Error("Tuit not found");
    error.code = 404;
    next(error);
    return;
  }
  res.json({});
};

module.exports = {
  getAllTuits,
  createTuit,
  deleteTuit,
};
