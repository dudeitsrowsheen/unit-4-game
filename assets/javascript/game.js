$(document).ready(function(){ //I need jQuery to run!
var goal, current, blueCrystal, pinkCrystal, purpleCrystal, greenCrystal
    
// Reset game

    var resetGame = function(){
        goal = Math.floor(Math.random()*101 + 19);
     blueCrystal = Math.floor(Math.random()*12);
     pinkCrystal = Math.floor(Math.random()*12);
     purpleCrystal = Math.floor(Math.random()*12);
     greenCrystal = Math.floor(Math.random()*12);
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
        console.log($(this).attr('value'));
console.log(current)
});

var Total = 0;
var Wins = 0;
var Losses = 0;

$('#Wins').text(Wins);
$('#Losses').text(Losses);


var blueCrystal
var pinkCrystal
var purpleCrystal
var greenCrystal



if (condition) {
    
} else {
    
}


if (condition) {
    
} else {
    
}


if (condition) {
    
} else {
    
}


if (condition) {
    
} else {
    
}

});






// $(document).ready(function () {

//     var pink
//     $('.crystal-button').on("click", function () {
//         console.log("clicked")
// $('#').attr("value",random)



