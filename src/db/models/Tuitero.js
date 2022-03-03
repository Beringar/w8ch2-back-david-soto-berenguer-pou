const { model, Schema } = require("mongoose");

const TuiteroModel = new Schema({
  username: { type: String, required: true },
  name: { type: String, default: "anonymous" },
});

const Tuitero = model("Tuitero", TuiteroModel, "tuiteros");

module.exports = Tuitero;
