// Business Logic
var special = function(userInput) {
  debugger;
  var numbers = [];
  for (index = 0; index < userInput + 1; index+= 1) {
    numbers.push(index);
    alert(numbers)
  }
  if (userInput === 0) {
    alert ("beep!")
  }
  else if (userInput ===1) {
    alert("boop!")
  }


  // var parsedNumber = parseInt(numbers);
  // if ((userInput) === 1) {
  //   return true;
  // } else {
  //   return false;
  // }
    // console.log(numbers)
  };














//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = parseInt($("input").val());
    special(userInput);

    // $("numberInput").hide();


    // special (numbers);
  // console.log(numbers);
  // $("#result").text(parsedNumber);
  // $("#result").text("beep!");
  //
  // if (!result) {
  //   $("#result").append(numbers[index]);
  })

});
