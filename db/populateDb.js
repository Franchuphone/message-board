require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

TRUNCATE TABLE messages RESTART IDENTITY CASCADE;

INSERT INTO messages (username, message) 
VALUES
  ('Daniel', 'La vaquitaaaaaaa'),
  ('Yoyo', 'Puta'),
  ('Nat', 'WTF !!! 😂😂😂');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
