var answer = function(numeral) {
  if ((numeral % 15 === 0) && (numeral % 5 === 0) && (numeral % 3 === 0)){
    return "pingpong";
  }
  else if (numeral % 3 === 0){
    return "ping";
  }
  else if (numeral % 5 === 0){
    return "pong";
  }
  else {
    return numeral;
  }

};

$(document).ready(function() {
  $("form#placeHolder").submit(function(event) {
  event.preventDefault();
  var numeral = parseInt($("input#numeral").val());
  var result = answer(numeral);
  var outputs = [result];
  outputs.forEach(function(output) {
    $("#result ul").append("<li>" + output + "</li>");
  })
 });
});
