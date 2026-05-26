const express = require("express");
const app = express();
const path = require("path");
const layout = require("express-ejs-layouts");

const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

const PORT = process.env.PORT || 3000;
// const HOST = "0.0.0.0";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "layout");

app.use(express.static("./public"));
app.use(layout);

app.use("/", indexRouter);
app.use("/new", messagesRouter);
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
