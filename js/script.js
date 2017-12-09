//business
var special = function(number) {
  debugger;
  var result = [];
  tmp = []
  var ones = parseInt(number);
  tmp.push(ones)
  if (ones = 0) {
    // var count = ones-1
    for (i=0; i < tmp.length; i++) {
      result.push("boop");
    } return result;
  } else  {
    result.push("beep")
  }return result;
};
  // var exceptions = [0,1];
  // if (tmp !== 1 && tmp !== 0) {
  //   for (var index = 0; index <  number + 1; index += 1) {
  //       for (var i = 0; i < exceptions.length; i += 1) {
  //         if (result === exceptions) {

  //       }
  //     }
  //   }
  // }














//User
  $(document).ready(function() {
    $("#formOne").submit(function() {
      event.preventDefault();
      var number = $("input").val();  // special(userInput);
      var result = special(number);
      if (result === "boop"){
        $("#result").text("boop!")
      }
    })
  });
