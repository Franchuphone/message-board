const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function postMessage(message) {
  const { username, text } = message;
  const values = [username, text];
  const query = `
    INSERT INTO messages( username, message )
    VALUES( $1, $2 );
    `;
  await pool.query(query, values);
}

async function getMessage(id) {
  const query = `
    SELECT * FROM messages WHERE id = $1
    `;
  const { rows } = await pool.query(query, [id]);
  if (rows.length === 0) {
    return null;
  }
  return rows[0];
}

module.exports = {
  getAllMessages,
  postMessage,
  getMessage,
};
