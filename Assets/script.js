// Save data to local storage before the page is unloaded

$(window).on("beforeunload", function () {
  // Save user input to local storage
  $(".time-block").each(function () {
    let id = $(this).attr("id");
    let text = $(this).find(".description").val();

    localStorage.setItem(id, text);
  });
});

//   Load data from local storage when the document is ready

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
});

// Gets user input that was saved in local storage and sets the values of the textarea elements.

    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let savedText = localStorage.getItem(id);
        $(this).find(".description").val(savedText);
    });

//  Applies the past, present, or future class to each time block by comparing the id to the current hour.

function timeIndicator() {
  let currentTime = dayjs().hour();

  $(".time-block").each(function () {
    let timeBlockEl = parseInt($(this).attr("id")); //.split("hour")[1]);

    if (timeBlockEl > currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (timeBlockEl === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
}

// Gets user input that was saved in local storage and sets the values of the textarea elements.

for (let i = 9; i <= 18; i++) {
    $(`#${i}.description`).val(localStorage.getItem(`${i}`));
}

timeIndicator();

// code to display current date in the header

let today = dayjs().format("MMM D, YYYY, dddd, hh:mm a");
$("#currentDay").text("Today is " + today);
