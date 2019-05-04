$(document).ready(function () { //I need jQuery to run!
    var goal, current, blueCrystal, pinkCrystal, purpleCrystal, greenCrystal, wins, losses;

    wins = 0;
    losses = 0;
    // Reset game

    var resetGame = function () {
        current = 0;
        goal = Math.floor(Math.random() * 101 + 19);
        blueCrystal = Math.floor(Math.random() * 12);
        pinkCrystal = Math.floor(Math.random() * 12);
        purpleCrystal = Math.floor(Math.random() * 12);
        greenCrystal = Math.floor(Math.random() * 12);
        $('#goal').text("Score to match:" + goal)
    }
    resetGame();


    // When clicking the function below will repeat with all crystals

    $("#blue").attr('value', blueCrystal);
    $("#pink").attr('value', pinkCrystal);
    $("#purple").attr('value', purpleCrystal);
    $("#green").attr('value', greenCrystal);


    $('.crystal-button').click(function () {
        current += parseInt($(this).attr('value'));
        $("#score-display").text(current);
        console.log($(this).attr('value'));
        console.log(current);

        if (current > goal) {
            alert("you lose");
            losses = losses + 1;
            resetGame();
        } else if (current === goal) {
            alert("you win");
            wins = wins + 1;
            resetGame();
        }

        $('#wins').text(wins);
        $('#losses').text(losses);
    });


});




