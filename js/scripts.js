// Business Logic
function special(numbers) {
  var parsedNumber = parseInt(numbers);
  if ((parsedNumber) === 1) {
    alert("this is 1");
    console.log(numbers)
  };
}













//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = $("input").val();
    var numbers = userInput.split('');
    special (numbers);
  console.log(numbers);
  })
});
