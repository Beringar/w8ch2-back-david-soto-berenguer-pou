const { model, Schema } = require("mongoose");

const TuitModel = new Schema({
  date: { type: Date, default: Date.now },
  text: { type: String, min: 1, max: 200, required: true },
  likes: { type: Number, default: 0 },
});

const Tuit = model("Tuit", TuitModel, "tuits");

module.exports = Tuit;
