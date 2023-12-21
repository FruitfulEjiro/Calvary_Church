/** @format */

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ministry", (req, res) => {
  res.render("ministry");
});

app.get("/schedule", (req, res) => {
  res.render("schedule");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT);
console.log(`Server is listening of port ${PORT}`);
