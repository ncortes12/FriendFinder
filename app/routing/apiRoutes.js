


var pets = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res){
        res.json(pets);
    })

    app.post("/api/friends", function (req, res){
        pets.push(req.body);
    })



}

