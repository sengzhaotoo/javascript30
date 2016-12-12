var recordSound = [];
var i = 0;

playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // binds the keyCode to the audio[data-key]
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // binds the keyCode to the key[data-key]
  
  if(event.keyCode=="67" && recordSound!=null){
    console.log(event.keyCode);
    playFromRecord();
  }

  // if audio is not found 
  if(!audio) return;

  recordSound.push(event.keyCode);
  audio.currentTime = 0; // currentTime is a property of audio/video 
  audio.play();
}

// play from recorded sounds and added a timeout function so sounds are played sequentially 
playFromRecord = () => {
  setTimeout(function() {
    const audio = document.querySelector(`audio[data-key="${recordSound[i]}"]`);
    audio.currentTime = 0;
    audio.play();
    i++;
    if(i<recordSound.length){
      playFromRecord();
    } else {
      i = 0; // reset so it loops from the beginning again 
    }
  }, 200);
}

function removeTransition(event){
  if(event.propertyName != 'transform') return; 
  this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// this gets the data-key associated with the key pressed and play sound 
window.addEventListener('keydown', playSound);