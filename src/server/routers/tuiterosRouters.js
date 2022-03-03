const express = require("express");
const { getAllTuits, createTuit } = require("../controllers/tuitsControllers");

const router = express.Router();

router.get("/", getAllTuiteros);
router.post("/new", createTuitero);
router.delete("/tuitero/:id", deleteTuitero);
router.patch("/tuitero/:id", updateTuitero);

module.exports = router;
