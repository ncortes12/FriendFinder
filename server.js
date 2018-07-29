
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 8080;


app.use(express.static("./app/public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function (){
    console.log("App listening on PORT " + PORT);
})