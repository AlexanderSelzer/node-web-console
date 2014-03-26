var hostname = "localhost";

var socket = io.connect("http://" + hostname + ":8767");

var jsInput = document.getElementById("jsinput");
var jsOutput = document.getElementById("jsoutput");
var submitJs = document.getElementById("submitjs");

submitJs.addEventListener("focus", function() {
  setTimeout(function() {
    submitJs.blur();
  }, 400);
});

submitJs.addEventListener("click", function(e) {
	var js = editor.getSession().getValue();
  socket.emit("js", js);
});

socket.on("output", function(data) {
  jsOutput.innerHTML = data;
});