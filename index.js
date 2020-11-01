var audio;
function keyPlay(key){
  switch (key) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'k':
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'l':
      audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;

    default:
  }
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //this.style.color = "white";
    keyPlay(this.innerHTML);
    buttonPressed(this.innerHTML);
  });
}

document.addEventListener("keydown",function(e){
  // console.log(e);
  keyPlay(e.key.toLowerCase());
  buttonPressed(e.key.toLowerCase());
});

function buttonPressed(key){
  var activeBtn = document.querySelector("."+key);
  activeBtn.classList.toggle("pressed");
  setTimeout(function(){
    activeBtn.classList.toggle("pressed");
  },100);
}
