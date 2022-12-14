const express = require("express");
// EJS
const ejs = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Exposing Dist Folder to access Tailwind CSS Build File
app.use('/dist', express.static('dist'));

app.get("/", (req, res) => {
    res.render("homepage");
});

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
