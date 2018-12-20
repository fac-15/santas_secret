const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");

const helpers = require("./views/helpers/index.js");
const routes = require("./routes/index.js");

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layout"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

app.set("port", process.env.PORT || 2512);
app.use(routes);

module.exports = app;
