const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let timeId;

// canvas.style.backgroundColor = "rgb(139, 34, 34)";
const stageWidth = document.body.clientWidth,
  stageHeight = document.body.clientHeight;

const startPointX = stageWidth;
const endPointY = stageHeight;
let cp1x = stageWidth;
let cp1y = stageHeight;
let cp2x = 0;
let cp2y = stageHeight;
const endPointX = 0,
  startPointY = stageHeight;

let speed = 10;
let increment = 0;

let cpVal = -50;

//let currentPointY;

function drawBezierCurve() {
  increment = increment + speed;
  cpVal += 2;

  let currentCPYTop = stageHeight - increment;
  if (cpVal > 20) {
    speed = 12;
  }
  if (cpVal >= 10) {
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.beginPath();
    ctx.fillRect(0, 0, stageWidth, currentCPYTop);
    ctx.fillStyle = " rgb(138, 17, 17)";
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(stageWidth, 0);
    ctx.lineTo(stageWidth, stageHeight - increment);
    ctx.bezierCurveTo(
      stageWidth,
      stageHeight + cpVal - increment,
      0,
      stageHeight + cpVal - increment,
      0,
      stageHeight - increment
    );
    ctx.fillStyle = " rgb(138, 17, 17)";
    ctx.fill();
    ctx.closePath();
  }

  timeId = requestAnimationFrame(drawBezierCurve);
}

function resizeHandler() {
  canvas.width = stageWidth * 2;
  canvas.height = stageHeight * 2;
  ctx.scale(2, 2);

  drawBezierCurve();
  window.addEventListener("click", function () {
    this.cancelAnimationFrame(timeId);
  });
}

function init() {
  window.addEventListener("resize", resizeHandler);
}

window.onload = () => resizeHandler();
init();
