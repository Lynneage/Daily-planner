

var today = moment();


$(document).ready(function(){
    $("#currentDay").text(moment().format("MM/DD/YYYY"));
    

    
    // will set scheduled event to a certain time
    $(".saveBtn").on("click", function(){
        var scheduled = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, scheduled );

    }); 

    // will retrive previously entered info from local storage into corresponding time
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

});
