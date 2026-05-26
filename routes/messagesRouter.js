const express = require("express");
const { getForm, postMsg } = require("../controllers/boardController");
const messagesRouter = express.Router();

messagesRouter.use(express.urlencoded({ extended: true }));

messagesRouter.get("/", getForm);
messagesRouter.post("/", postMsg);

module.exports = messagesRouter;
