const grid = document.querySelector(".grid");
const paddle = document.querySelector(".paddle");
const PaddleMB = 30;
let leftClicked = false;
let rightClicked = false;
let speed = 10;

const paddleDetails = {
  x: grid.clientWidth / 2 - paddle.clientWidth / 2,
  y: grid.clientHeight - paddle.clientHeight - PaddleMB,
  translateX: 0,
};

export function DrawBoard() {
  requestAnimationFrame(update);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      rightClicked = true;
    } else if (e.key === "ArrowLeft") {
      leftClicked = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
      rightClicked = false;
    } else if (e.key === "ArrowLeft") {
      leftClicked = false;
    }
  });

  requestAnimationFrame(move);
}

function update() {
  requestAnimationFrame(update);
  paddle.style.top = `${paddleDetails.y}px`;
  paddle.style.left = `${paddleDetails.x}px`;
  paddle.style.marginBottom = `${PaddleMB}px`;
}

function move() {
  requestAnimationFrame(move);
  if (rightClicked) {
    if (
      paddleDetails.x + paddleDetails.translateX + speed + paddle.clientWidth <
      grid.clientWidth
    ) {
      paddleDetails.translateX += speed;
      paddle.style.transform = `translateX(${paddleDetails.translateX}px)`;
    }
  }

  if (leftClicked) {
    if (paddleDetails.x + paddleDetails.translateX - speed >= 0) {
      paddleDetails.translateX -= speed;
      paddle.style.transform = `translateX(${paddleDetails.translateX}px)`;
    }
  }
}
