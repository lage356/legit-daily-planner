$(function () {
  var timeDisplayEl = $("#currentDay");
  var currentHour = dayjs().format("HH:mm:ss a");
  var newID = 8;
  var buttonList = $('.btn');
  var hour;
  var endhour;

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  buttonList.on('click', function (event){
    console.log(event);
  });

  
  // TODO: Add code to apply the past, present, or future class to each time

  function renderColors() {


    $('.evento').each(function(i, event){
      
      var hour = $(this).data('hour');
      var endhour = $(this).data('endhour');
    
      newID = newID + 1;
      var newElement =$("#hour-" + newID);

      if(currentHour>hour && currentHour < endhour){
        newElement.addClass("present");
      }else if (currentHour>hour){
        newElement.addClass("past");
      }else if (currentHour < hour){
        newElement.addClass("future")
      }
    });
  //  events.forEach((event) => {


      newID = newID + 1;
      var newElement =$("#hour-" + newID);

      if(currentHour>hour && currentHour <endhour){
        newElement.addClass("present");
      }else if (currentHour>hour){
        newElement.addClass("past");
      }else if (currentHour < hour){
        newElement.addClass("future")
      }
  //   });
    
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  function saveScheduletoStorage(){
    
    var data = $('#hour-9').children('textarea').eq(0);

    console.log(data);
  }
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var rightNow = dayjs().format("dddd MMMM DD, YYYY ");
    timeDisplayEl.text(rightNow);
  }
  

  displayTime();
  renderColors();
});
