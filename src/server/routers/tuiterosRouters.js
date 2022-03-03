const express = require("express");
const {
  listTuiteros,
  createTuitero,
  deleteTuitero,
  updateTuitero,
  getTuitero,
} = require("../controllers/tuiterosControllers");

const router = express.Router();

router.get("/", listTuiteros);
router.get("/:id", getTuitero);
router.post("/new", createTuitero);
router.delete("/tuitero/:id", deleteTuitero);
router.patch("/tuitero/:id", updateTuitero);

module.exports = router;
