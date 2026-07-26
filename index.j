const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Tell Express where the views are
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log("🚀 Mahngueloh Tech is running");
    console.log(`http://127.0.0.1:${PORT}`);
});
