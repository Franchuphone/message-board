const { nanoid } = require("nanoid");
const messages = require("../models/messages");

const getIndex = (req, res) =>
  res.render("index", { title: "Messages Board", messages: messages });

const getForm = (req, res) => res.render("form", { title: "Sending message" });

const postMsg = (req, res) => {
  const formattedMessage = req.body.text.replace(/\n/g, "<br>");
  messages.push({
    text: formattedMessage,
    user: req.body.user,
    added: new Date(),
    id: nanoid(6),
  });
  res.redirect("/");
};

const getMsg = (req, res, next) => {
  const queriedMsg = messages.find((message) => message.id == req.params.id);
  queriedMsg !== undefined
    ? res.render("message", {
        message: queriedMsg,
        title: `Message from ${queriedMsg.user}`,
      })
    : next();
};

module.exports = { getIndex, getForm, postMsg, getMsg };
