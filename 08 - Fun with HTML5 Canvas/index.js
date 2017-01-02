const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

/* intial setup */
let isDrawing = false; 
let lastX = 0, letY = 0; 
let hue = 0; 
let direction = true;

function draw(e) {
  if(!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath(); 

  // start 
  ctx.moveTo(lastX, lastY);

  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // update lastest coordinates

  hue++;
  if(hue >= 360){
    hue = 0; // reset to 0 
  }

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
    direction = !direction; 
  }

  if(direction){
    ctx.lineWidth++;
  } else {
    ctx.ineWidth--; 
  }
}

canvas.addEventListener('mousemove', draw); 
canvas.addEventListener('mouseup', () => isDrawing = false); 
canvas.addEventListener('mousedown', () => isDrawing = false); 

// once it gets out of the window, it no longer traces the focus point -- will think of a fix soon