// add event listener on save button. 

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
  
        localStorage.setItem(time, text);
    })
  });

//  Applies the past, present, or future class to each time block by comparing the id to the current hour. 

function timeIndicator() {
    let currentTime = dayjs().hour();

    $(".time-block").each(function () {
        let timeBlockEl = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlockEl > currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        else if (timeBlockEl === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");

        }
    })
}

// Gets user input that was saved in local storage and sets the values of the textarea elements. 

$("#nineHour.description").val(localStorage.getItem("nineHour"));
$("#tenHour.description").val(localStorage.getItem("tenHour"));
$("#elevenHour.description").val(localStorage.getItem("elevenHour"));
$("#twelveHour.description").val(localStorage.getItem("twelveHour"));
$("#oneHour.description").val(localStorage.getItem("oneHour"));
$("#twoHour.description").val(localStorage.getItem("twoHour"));
$("#threeHour.description").val(localStorage.getItem("threeHour"));
$("#fourHour.description").val(localStorage.getItem("fourHour"));
$("#fiveHour.description").val(localStorage.getItem("fiveHour"));
$("#sixHour.description").val(localStorage.getItem("sixHour"));

timeIndicator();

// code to display current date in the header

let today = dayjs().format('MMM D, YYYY, dddd, hh:mm a');
$('#currentDay').text("Today is " + today)

// I seem to be missing some functionality. The past, present, future feature does not seem work properly.