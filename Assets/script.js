// Save data to local storage before the page is unloaded

$(window).on("beforeunload", function () {
    // Save user input to local storage
    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let text = $(this).find(".description").val();
  
        localStorage.setItem(id, text);
    });
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

$("#9.description").val(localStorage.getItem("9"));
$("#10.description").val(localStorage.getItem("10"));
$("#11.description").val(localStorage.getItem("11"));
$("#12.description").val(localStorage.getItem("12"));
$("#13.description").val(localStorage.getItem("13"));
$("#14.description").val(localStorage.getItem("14"));
$("#15.description").val(localStorage.getItem("15"));
$("#16.description").val(localStorage.getItem("16"));
$("#17.description").val(localStorage.getItem("17"));
$("#18.description").val(localStorage.getItem("18"));

timeIndicator();

// code to display current date in the header

let today = dayjs().format('MMM D, YYYY, dddd, hh:mm a');
$('#currentDay').text("Today is " + today)
