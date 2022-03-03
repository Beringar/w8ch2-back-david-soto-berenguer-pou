require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { notFoundError, generalError } = require("./middlewares/errors");
const tuitsRouters = require("./routers/tuitsRouters");
const tuiterosRouters = require("./routers/tuiterosRouters");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

app.use("/tuits", tuitsRouters);
app.use("/tuiteros", tuiterosRouters);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
