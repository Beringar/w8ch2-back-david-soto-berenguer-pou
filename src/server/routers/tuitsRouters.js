const express = require("express");
const { getAllTuits } = require("../controllers/tuitsControllers");

const router = express.Router();

router.get("/", getAllTuits);
router.post("/new");
router.patch("/like/:id");

module.exports = router;
