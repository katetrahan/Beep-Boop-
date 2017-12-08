// Business Logic
var special = function(number) {
  debugger;
  var tmp = number;
  var result = [];
  // var split = tmp.split(""); // added
  var exceptions = ["0","1"]; // added
  // for (var indexOne = 0; indexOne < split.length; index +=1) { // added
  //   for (var i = 0; i < exceptions.length; i += 1) { // added
  //     if (split[indexOne] === exceptions[i]) {
  //       split.splice(indexOne,1,"beep");
  //     }
  //   }
  // }
  for (var i = 0; i < result.length; i += 1) {
    result.push(i);
    for (var index = 0; index < exceptions.length; index += 1) {
      if (result === exceptions){
        return "beep"
      }
    }
  }

  // below works
  //  if (tmp === 1) {
  //    return "boop";
  //  }
  // else if (tmp === 0) {
  //   return "beep";
  // }
  //  else if (tmp !== 1 && tmp !== 0) {
  //    for (var index = 0; index < number + 1; index+= 1) {
  //      result.push(index);
   }
     // alert(numbers)
  // }
  // return result

// };


















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
