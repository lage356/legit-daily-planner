$(document).ready(function () {
  var timeDisplayEl = $("#currentDay");
  var currentHour = dayjs().hour();
  var buttonList = $(".btn");


  // TODO: Add a listener for click events on the save button. This code should

  buttonList.on("click", function (event) {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  // TODO: Add code to apply the past, present, or future class to each time

  $(".evento").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    console.log(hour);

    if (currentHour === hour) {
      $(this).addClass("present");
    } else if (currentHour > hour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
  }

  // TODO: Add code to display the current date in the header of the page.

  var rightNow = dayjs().format("dddd MMMM DD, YYYY ");
  timeDisplayEl.text(rightNow);

});
