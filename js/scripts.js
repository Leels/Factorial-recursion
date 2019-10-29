//Factorial without recursion, uses for loop//

var factorial = function(number) {
  if (number === 0 || number === 1) {

  return 1;

  }
  for (var i = number -1; i>=1; i -=1) {
    number *=i;
  }
  return number;
}

$(document).ready(function(){
  $("form.factorial").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = (factorial(number));

$(".result").text(result);
  })

//Factorial with recursion//

//   function factorial(x) {
//     if (x < 0) return;
//     if (x === 0) return 1;
//     return x * factorial(x - 1);
//   }
//
//   factorial(4);
  // console.log(factorial(number));
//

});
