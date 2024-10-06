const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://admin:password@mongodb/myDB?authSource=admin")
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// Routes
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  console.log("Just For Test");
  res.redirect("/todos");
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
