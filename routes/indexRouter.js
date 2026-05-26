const { Router } = require("express");
const indexRouter = Router();
const { getIndex, getMsg } = require("../controllers/boardController");

indexRouter.get("/", getIndex);
indexRouter.get("/details/:id", getMsg);

module.exports = indexRouter;
