const blocks = document.querySelector(".blocks");
const grid = document.querySelector(".grid");
const paddle = document.querySelector(".paddle");
const ball = document.querySelector(".ball");

const blockWidth = grid.clientWidth / 6;
const startX = grid.clientWidth / 2 - ball.clientHeight / 2;
const startY =
  grid.clientHeight - paddle.clientHeight - ball.clientHeight * 2.3;
const PaddleMB = 30;
let leftClicked = false;
let rightClicked = false;
let gameStarted = false;
let speed = 8;

document.addEventListener("keyup", function start(e) {
  if (e.key === " ") {
    ballDetails.velocityX = -3;
    ballDetails.velocityY = 3;
    gameStarted = true;
    document.removeEventListener("keyup", start);
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && gameStarted) rightClicked = true;
  else if (e.key === "ArrowLeft" && gameStarted) leftClicked = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight" && gameStarted) rightClicked = false;
  else if (e.key === "ArrowLeft" && gameStarted) leftClicked = false;
});

const paddleDetails = {
  x: grid.clientWidth / 2 - paddle.clientWidth / 2,
  y: grid.clientHeight - paddle.clientHeight - PaddleMB,
  translateX: 0,
};
const ballDetails = {
  x: 0,
  y: 0,
  velocityX: 0,
  velocityY: 0,
};
let colors = ["#00eefb", "#f738fc"];
function DrawBlocks() {
  for (let i = 0; i < 5 * 4; i++) {
    let color = Math.floor(Math.random() * colors.length);
    const block = document.createElement("div");
    block.style.cssText = `
        width: ${blockWidth}px;
        height: 30px;
        background-color: ${colors[color]};
        box-sizing: border-box;
        margin-bottom: 20px;
        box-shadow: ${colors[color]} 0px 2px 8px 0px;
        border-radius: 8px;
        text-shadow: #fc0 1px 0 10px;
      `;
    blocks.appendChild(block);
  }
}
export function Game() {
  paddle.style.top = `${paddleDetails.y}px`;
  paddle.style.left = `${paddleDetails.x}px`;
  DrawBlocks();
  ball.style.left = `${startX}px`;
  ball.style.top = `${startY}px`;

  requestAnimationFrame(gameLoop);
}
function moveBall() {
  ballDetails.x += ballDetails.velocityX;
  ballDetails.y -= ballDetails.velocityY;
  let boundriesBall = ball.getBoundingClientRect();
  let boundriesPadlle = paddle.getBoundingClientRect();

  if (
    boundriesBall.bottom >= boundriesPadlle.top &&
    boundriesBall.right >= boundriesPadlle.left &&
    boundriesBall.left <= boundriesPadlle.right
  ) {
    ballDetails.velocityY = Math.abs(ballDetails.velocityY);
  }

  if (startX + ballDetails.x + ball.clientWidth > grid.clientWidth) {
    ballDetails.velocityX *= -1;
  } else if (startY + ballDetails.y <= 0) {
    ballDetails.velocityY *= -1;
  } else if (startY + ballDetails.y + ball.clientHeight >= grid.clientHeight) {
    ballDetails.velocityY *= -1;
  } else if (startX + ballDetails.x <= 0) {
    ballDetails.velocityX *= -1;
  }
  ball.style.transform = `translateX(${ballDetails.x}px) translateY( ${ballDetails.y}px)`;
}

function gameLoop() {
  moveBall();
  if (rightClicked) {
    if (
      paddleDetails.x + paddleDetails.translateX + speed + paddle.clientWidth <
      grid.clientWidth
    ) {
      paddleDetails.translateX += speed;
    }
  }
  if (leftClicked) {
    if (paddleDetails.x + paddleDetails.translateX - speed >= 0) {
      paddleDetails.translateX -= speed;
    }
  }
  paddle.style.transform = `translateX(${paddleDetails.translateX}px)`;
  requestAnimationFrame(gameLoop);
}
