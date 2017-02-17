/* document.getElementById('text').innerHTML = "Hello"


$("#text").text("Hello")
$("#text2").html("<h1>Hello</h1>")
*/
function add() {
  var total = $("#total").text();
  var newTotal = $("#total").text(Number(total) + 1);
  return newTotal;
}

function sendEmail() {/* An empty parentheses denotes no parameters. */
  $('#email').text("Item Added")
  return window.setTimeout(function() { /*anonymous function w/i or nested inside function*/
    $("#email").text("sendEmail")
  }, 2000)/* in milliseconds so this is every 2 seconds )*/
}


function checkClass(header, content) {
  if ($(header).hasClass("active")) {
    $(header).removeClass("active");
    $(content).addClass("hidden");
  }
  return true;
}

function makeActive(header, content) {
  checkClass("#description", "#description-content") ;
  checkClass("#question", "#question-content");
  checkClass("#reviews", "#reviews-content");
  $(header).addClass("active");
  $(content).removeClass("hidden");
  return true;
}

$('#cool').css('background-color', 'red');
