const { nanoid } = require( "nanoid" );


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: nanoid( 6 ),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: nanoid(6),
  },
];

module.exports = messages;
