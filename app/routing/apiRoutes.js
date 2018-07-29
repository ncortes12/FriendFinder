


var pets = require("../data/friends.js");
var data;
var petScore = [];
var numArray = [];
var scoreArray;
var reducer = (accumulator, currentValue) => accumulator + currentValue
var compScore = 0;
var compScoreArray = [];
var diffArray = [];
var absDiff;
var lowestScore = 1000;
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(pets);
    })

    app.post("/api/friends", function (req, res) {

        //console.log(pets);
        data = req.body;


        convertToNum();

        for (var y = 0; y < pets.length; y++) {
            petScore = pets[y].scores
            findMatch();
            diffArray = [];


        }

        // console.log(compScoreArray)
        showMatch();
    })

    // pets.push(data);
    // res.json(data);

}

function convertToNum() {
    scoreArray = data.score;
    for (var i = 0; i < scoreArray.length; i++) {
        var numScore = Number(scoreArray[i]);
        numArray.push(numScore);
    }

}

function findMatch() {

    for (x = 0; x < numArray.length; x++) {

        var diff = numArray[x] - petScore[x]
        absDiff = Math.abs(diff);
        diffArray.push(absDiff);
        compScore = diffArray.reduce(reducer);

    }
    // console.log(diffArray);
    compScoreArray.push(compScore)
    // console.log(compScoreArray)
}

function showMatch() {
    console.log("happening")

    for (var i = 0; i < compScoreArray.length; i++) {
        if (compScoreArray[i] < lowestScore) {
            lowestScore = compScoreArray[i];
        }

    }
    console.log("Lowest Score " + lowestScore);

    for (var i = 0; i < compScoreArray.length; i++) {

        if (lowestScore === compScoreArray[i]) {
            console.log(pets[i])

        }

    }
}












