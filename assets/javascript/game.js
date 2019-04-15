$(function () {
    // Variables
    var wins = 0;
    var losses = 0;
    var comments = "";
    var score = 0;

    // "Get Div" Variables
    var rnDiv = $("#random-number");
    var winLoseDiv = $("#wins-losses");
    var scoreDiv = $("#score");
    var btnDiv = $("#buttons");

    // Number Divs
    var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var blueValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var greenValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var redValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var yellowValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    function startGame() {
        rnDiv.append("Number to match: " + randomNum);
        winLoseDiv.text("Wins: " + wins + " " + "Losses: " + losses + " " + comments);
        scoreDiv.append("Your score: " + score);
        console.log(score, randomNum);
        $("button").click(function () {
            if (this.id === "blue") {
                score = score + blueValue;
                scoreDiv.text("Your score: " + score);
                // console.log(blueValue);
            } if (this.id === "green") {
                score = score + greenValue;
                scoreDiv.text("Your score: " + score);
                // console.log(greenValue);
            } if (this.id === "red") {
                score = score + redValue;
                scoreDiv.text("Your score: " + score);
                // console.log(redValue);
            } if (this.id === "yellow") {
                score = score + yellowValue;
                scoreDiv.text("Your score: " + score);
                // console.log(yellowValue);
            };
            if (score === randomNum) {
                comments = "You Win!";
                wins++;
                console.log(wins);
                winLoseDiv.text("Wins: " + wins + " " + "Losses: " + losses + " " + comments);
                reset();
            } else if (score > randomNum) {
                comments = "You Lose!";
                losses++;
                console.log(losses);
                winLoseDiv.text("Wins: " + wins + " " + "Losses: " + losses + " " + comments);
                reset();
            }
        });
        function reset() {
            score = 0;
            wins;
            losses;
            comments = "";
            scoreDiv.text("Your score: " + score);
        };
    };
    startGame();
});