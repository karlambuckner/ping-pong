var answer = function(lastNumber) {
  var result= [];
    for (var a = 1; a <= lastNumber; a++) {
      if ((a % 15 === 0) && (a % 5 === 0) && (a % 3 === 0)){
    result.push("pingpong");
  }
  else if (a % 3 === 0){
    result.push("ping");
  }
  else if (a % 5 === 0){
    result.push("pong");
  }
  else {
    result.push(a);
  }
}
return result;
};

$(document).ready(function() {
  $("form#placeHolder").submit(function(event) {
  event.preventDefault();
  var numberEntered = parseInt($("input#numeral").val());
  var output = answer(numberEntered);
  var lastOutput = numberEntered - 1;
    for (var a = 0; a <= lastOutput; a++) {
      $("#result ul").append("<li>" + output[a] + "</li>");
    }
 });
});
