$(document).ready(function(){
    var worldSeries = "";
    

    $("input[name='world-series']").on("click",function(){
        // console.log($(this).val());
        worldSeries = $(this).val();

        // console.log(worldSeries);
    });


    $("button").on("click",function(){
        // console.log("submitted");

        if (worldSeries == "Texas Rangers"){
            console.log("You Win!")
            
        }else{
            console.log("You lose!")
        }
    });

    var seconds = 30;

    function startTimer(){
        var timer = setInterval(function(){
          
            console.log(seconds)
            $(".timer").html(seconds);
            if (seconds == 0) {
                alert("Times Up!");
                clearInterval(timer);
            }else {
                seconds--;
            }
    
            
        },1000);
    
    }

    //call function 
    startTimer();

    //need to create answer functions so once the player select all the answers it will
    //give them the correct or wrong answer to the questions 
    
    

});