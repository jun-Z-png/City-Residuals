const canvas = document.getElementById("canvas");
canvas.width=300
canvas.height=300
const ctx = canvas.getContext("2d");
ctx.font='Averia Serif Libre';

let countClicks = 2;

canvas.onclick = function() { 
  countClicks++;
};



function draw(e){
   //mouse position
    var x = e.clientX ;
    var y = e.clientY ;
    //clear canvas
    ctx.clearRect(0,0,window.screen.width,window.screen.height);
    //draw circle
    ctx.strokeStyle = 'yellow';
  
    
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(window.screen.width, y);
    ctx.stroke();
  ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, window.screen.height);
    ctx.stroke();
   ctx.fillStyle="yellow";
    ctx.fillRect(x,y-10,40,10);
  ctx.fillStyle="black";
  ctx.fillText(x+","+y, x,y);
  
 
  
  
  
} 
canvas.addEventListener("mousemove",draw,false);

canvas.addEventListener("click", () => {
  if(countClicks%2==0){
    canvas.addEventListener("mousemove",draw,false);
  }
  else{
  canvas.removeEventListener("mousemove", draw,false);}}) 