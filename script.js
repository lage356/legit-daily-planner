$(document).ready(function() { 
  var timeDisplayEl = $("#currentDay");
  var currentHour = dayjs().format("HH:mm:ss a");
  var newID = 8;
  var buttonList = $(".btn");
  var scheduleEvents = [];

  // TODO: Add a listener for click events on the save button. This code should


  buttonList.on("click", function (event) {
    
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');

    var scheduleObj = {
      hora: time,
      schedule: value
    }

    scheduleEvents.push(scheduleObj);
    localStorage.setItem("Events Scheduled", JSON.stringify(scheduleEvents));

  });

  // TODO: Add code to apply the past, present, or future class to each time

  function renderColors() {
    $(".evento").each(function (i, event) {
      var hour = $(this).data("hour");
      var endhour = $(this).data("endhour");

      newID = newID + 1;
      var newElement = $("#hour-" + newID);

      if (currentHour > hour && currentHour < endhour) {
        newElement.addClass("present");
      } else if (currentHour > hour) {
        newElement.addClass("past");
      } else if (currentHour < hour) {
        newElement.addClass("future");
      }
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  function saveScheduletoStorage() {

  }

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var rightNow = dayjs().format("dddd MMMM DD, YYYY ");
    timeDisplayEl.text(rightNow);
  }

  displayTime();
  renderColors();
});
