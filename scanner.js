const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var students = JSON.parse(fs.readFileSync("IDs.json"));

app.get("/", (req, res) => {
    res.render("DudeScanner", { ejsData: students });
});

app.listen(3000, () => {
    console.log("server started");
});