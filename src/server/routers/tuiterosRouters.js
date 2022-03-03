const express = require("express");
const { getAllTuits, createTuit } = require("../controllers/tuitsControllers");

const router = express.Router();

router.get("/");
router.post("/new");
router.delete("/tuitero/:id");
router.patch("/tuitero/:id");

module.exports = router;
