

//defining variables
var pets = require("../data/pet.js");
var data;
//this will hold the survey scores for each pet
var petScore = [];
//this will hold the users survey response stored as numbers
var numArray = [];
// this is the users survey results with strings instead of numbers
var scoreArray;
// this variable i used to conver the differences in the arrays into absolute value, so there are no negative numbers
var absDiff;
// this array holds the differences between the user and each pet
var diffArray = [];
//this function I use to sum the diffArray function 
var reducer = (accumulator, currentValue) => accumulator + currentValue
// this variable holds the sum of differences
var compScore = 0;
//i push the compScore in to this array
var compScoreArray = [];
// variable used to compare the scores to find the lowest
var lowestScore = 1000;
// this variable is set to the best pet match and exported back to survey.html
var bestPet;
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(pets);
    })

    app.post("/api/friends", function (req, res) {

        //storing req.body in an easier to use variable
        data = req.body;
        console.log(data);
        
        convertToNum();
        // this loop goes through all of the pet options from friends.js
        for (var y = 0; y < pets.length; y++) {
            petScore = pets[y].scores
            findMatch();
            diffArray = [];


        }

        // console.log(compScoreArray)
        showMatch();
        console.log(bestPet)
        // this would push the new user into the array, but since i am mathcing pets not people i don't want the humans in the pets array
        // pets.push(data);
        res.json(bestPet);
    })



}
// this function converts the numbers in string form I received from the survey in to numbers
function convertToNum() {
    scoreArray = data.score;
    for (var i = 0; i < scoreArray.length; i++) {
        var numScore = Number(scoreArray[i]);
        numArray.push(numScore);
    }

}

function findMatch() {
//this for loop goes through all of the users responses and gets the difference between each pet option
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
//this loop updates the lowestScore variable with the lowest compatability score
    for (var i = 0; i < compScoreArray.length; i++) {
        if (compScoreArray[i] < lowestScore) {
            lowestScore = compScoreArray[i];
        }

    }
    console.log("Lowest Score " + lowestScore);
// this loop sets the bestPet variable to the pet with the lowets compatability score
    for (var i = 0; i < compScoreArray.length; i++) {

        if (lowestScore === compScoreArray[i]) {
            // console.log(pets[i])

            bestPet = pets[i]

        }

    }
}












