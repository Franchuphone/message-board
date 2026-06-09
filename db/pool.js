require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// if (!process.env.DATABASE_URL) {
//     console.error("ERREUR CRITIQUE: DATABASE_URL n'est pas définie !");
//   } else {
//     console.log("Variable d'environnement détectée. Connexion en cours...");
//   }
