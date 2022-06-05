

var today = moment();


// sets date
$(document).ready(function(){
    $("#currentDay").text(moment().format("MM/DD/YYYY"));
    function timeChange(){
        var Hour = moment().hour(); 
        // color coding for time of day (past grey/curret hour red/ ahead green)
        $('.time-block').each(function(){
            var TOD = parseInt($(this).attr("id"));
            if (TOD < Hour){
                $(this).addClass("past");
            } else if (TOD === Hour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
    timeChange();
    var timeInterval = setInterval(timeChange, 1000);
    
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
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
    $("#20 .description").val(localStorage.getItem("20"));
    $("#21 .description").val(localStorage.getItem("21"));
    $("#22 .description").val(localStorage.getItem("22"));
    $("#23 .description").val(localStorage.getItem("23"));
    $("#24 .description").val(localStorage.getItem("24"));

    


});