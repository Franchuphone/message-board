const { nanoid } = require("nanoid");

const messages = [
  {
    text: "La vaquitaaaaaaa",
    user: "Daniel",
    added: new Date(),
    id: nanoid(6),
  },
  {
    text: "Puta",
    user: "Yoyo",
    added: new Date(),
    id: nanoid(6),
  },
  {
    text: "WTF !!! 😂😂😂",
    user: "Nat",
    added: new Date(),
    id: nanoid(6),
  },
];

module.exports = messages;
