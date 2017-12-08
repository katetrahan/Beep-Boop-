// Business Logic
var special = function (userInput) {
  // var parsedNumber = parseInt(numbers);
  if ((userInput) === 1) {
    return false;
    ;
    // console.log(numbers)
  };
}













//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = parseInt($("input").val());
    var result = special (userInput);
    // special (numbers);
  // console.log(numbers);
  // $("#result").text(parsedNumber);
  if (!result) {
    $("#result").text(userInput);
  }
  })
});
