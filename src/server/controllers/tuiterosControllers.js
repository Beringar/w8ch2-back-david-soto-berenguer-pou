const Tuitero = require("../../db/models/Tuitero");

const listTuiteros = async (req, res, next) => {
  try {
    const tuiteros = await Tuitero.find();
    res.json({ tuiteros });
  } catch (error) {
    next(error);
  }
};

const getTuitero = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tuitero = await Tuitero.findById(id);
    if (tuitero) {
      res.json(tuitero);
      return;
    }
    const error = new Error("tuitero not found");
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Bad id format or invalid id";
    error.code = 400;
    next(error);
  }
};

const createTuitero = async (req, res, next) => {
  const tuitero = req.body;
  try {
    const newTuitero = await Tuitero.create(tuitero);
    res.status(201);
    res.json(newTuitero);
  } catch (error) {
    error.message = "Bad request learn how to create a tuitero noob";
    error.code = 400;
    next(error);
  }
};

const updateTuitero = async (req, res, next) => {
  const newTuitero = req.body;
  const { id } = req.params;
  try {
    const updatedTuitero = await Tuitero.replaceOne({ _id: id }, newTuitero, {
      runValidators: true,
    });

    if (updatedTuitero.modifiedCount === 0) {
      const error = new Error("Update tuitero error");
      error.code = 400;
      next(error);
      return;
    }
    res.json(newTuitero);
  } catch (error) {
    error.code = 400;
    error.message = "Bad request at updating tuitero";
    next(error);
  }
};

const deleteTuitero = async (res, req, next) => {
  const { id } = req.params;
  try {
    const deletedTuitero = await Tuitero.findByIdAndDelete(id);
    if (deletedTuitero) {
      res.json(deletedTuitero.id);
      return;
    }
    const error = new Error("ID or tuitero not found");
    error.code = 404;
    next(error);
  } catch (error) {
    error.message = "Bad request triying to delete tuitero";
    error.code = 400;
    next(error);
  }
};

module.exports = {
  listTuiteros,
  getTuitero,
  createTuitero,
  updateTuitero,
  deleteTuitero,
};
