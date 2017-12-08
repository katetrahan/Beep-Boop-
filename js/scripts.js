// Business Logic
var special = function(number) {
  debugger;
  var tmp = number;
  var result = [];
  if (tmp === 1) {
    return "boop";
  }
  else if (tmp === 0) {
    return "beep";
  }
  else if (tmp !== 1 && tmp !== 0) {
    for (var index = 0; index < number + 1; index+= 1) {
      result.push(index);
  }
    // alert(numbers)
  }
  return result
  // return numbers
  // if (number === 0) {
  //   alert("beep!")
  // }
  // else if (number ===1) {
  //   alert("boop!")
  }


  // var parsedNumber = parseInt(numbers);
  // if ((userInput) === 1) {
  //   return true;
  // } else {
  //   return false;
  // }
    // console.log(numbers)















//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var number = parseInt($("input").val());  // special(userInput);
    var result = special(number);
    if (result === "boop"){
      $("#result").text("boop!")
    }
    else if (result === "beep") {
      $("#result").text("beep!")
    }
    else {
      $("#result").text(result);
    }

    // $("#result").text(numbers);

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
