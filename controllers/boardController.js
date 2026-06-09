const { nanoid } = require("nanoid");
const { getAllMessages, postMessage, getMessage } = require("../db/queries");

const getIndex = async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { title: "Messages board", messages: messages });
};

const getForm = (req, res) => res.render("form", { title: "Sending message" });

const postMsg = async (req, res) => {
  const formattedText = req.body.text.replace(/\n/g, "<br>");
  const message = {
    username: req.body.user,
    text: formattedText,
  };
  await postMessage(message);
  res.redirect("/");
};

const getMsg = async (req, res, next) => {
  const queriedMsg = await getMessage(req.params.id);
  console.log(queriedMsg);
  queriedMsg
    ? res.render("message", {
        message: queriedMsg,
        title: `Message from ${queriedMsg.username}`,
      })
    : next();
};

module.exports = { getIndex, getForm, postMsg, getMsg };
