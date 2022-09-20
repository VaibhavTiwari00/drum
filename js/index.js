for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    input = this.innerHTML;
    drum(input);
  });
}
document.addEventListener("keypress", function (event) {
  input = event.key;
  drum(input);
});

function drum(input) {
  switch (input) {
    case "w":
      var w = new Audio("sound/mixkit-bad-joke-drums-2893.wav");
      w.play();
      break;
    case "a":
      var a = new Audio("sound/mixkit-deep-dark-horror-drum-557.wav");
      a.play();
      break;
    case "s":
      var s = new Audio("sound/mixkit-drum-and-percussion-545.wav");
      s.play();
      break;
    case "d":
      var d = new Audio("sound/mixkit-drum-bass-hit-2294.wav");
      d.play();
      break;
    case "j":
      var j = new Audio("sound/mixkit-drum-joke-accent-579.wav");
      j.play();
      break;
    case "k":
      var k = new Audio("sound/mixkit-hand-tribal-drum-562.wav");
      k.play();
      break;
    case "l":
      var l = new Audio("sound/mixkit-tribal-dry-drum-558.wav");
      l.play();
      break;
    default:
      console.log("unknown");
  }
}
