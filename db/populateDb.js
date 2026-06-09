require("dotenv").config();
const { Client } = require("pg");

const createTableSQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ) NOT NULL,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  );
`;

const seedDataSQL = `
  INSERT INTO messages (username, message) 
  VALUES
    ('Daniel', 'La vaquitaaaaaaa'),
    ('Yoyo', 'Puta'),
    ('Nat', 'WTF !!! 😂😂😂')
  ON CONFLICT DO NOTHING;
`;

async function main() {
  console.log("🔧 Initialisation de la base de données...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(createTableSQL);
  console.log("✅ Structure de la table vérifiée.");
  const { rows } = await client.query("SELECT id FROM messages LIMIT 1");
  if (rows.length === 0) {
    console.log("🌱 Table vide. Insertion des données initiales...");
    await client.query(seedDataSQL);
    console.log("✅ Données initiales insérées.");
  } else {
    console.log("💾 Chargement de la table existante");
  }
  await client.end();
  console.log("🎉 Initialisation de la table terminée.");
}

main();
