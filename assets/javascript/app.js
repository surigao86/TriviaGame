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





});