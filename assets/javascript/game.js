$(document).ready(function(){//I need jQuery to run!
 
	var blueCrystal = Math.floor(Math.random()*12);
	var pinkCrystal = Math.floor(Math.random()*12);
	var purpleCrystal = Math.floor(Math.random()*12);
    var greenCrystal = Math.floor(Math.random()*12);
    


	$("#blue").attr('value', blueCrystal);
    $("#pink").attr('value', pinkCrystal);
    $("#purple").attr('value', purpleCrystal);
    $("#green").attr('value', greenCrystal);
​
    
$('.crystal-button').click(function(){;
​
		console.log($(this).attr('value'));
​
	});
​
});






// $(document).ready(function () {

//     var pink
//     $('.crystal-button').on("click", function () {
//         console.log("clicked")
// $('#').attr("value",random)




}



    });



});


Math.random()