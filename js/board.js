const grid = document.querySelector(".grid");
const board = document.querySelector(".board");
const BoardMB = 30;
const paddle = {
  x: grid.clientWidth / 2 - board.clientWidth / 2,
  y: grid.clientHeight - board.clientHeight - BoardMB,
};
console.log(paddle.x, paddle.y);

export function DrawBoard() {
  board.style.top = `${paddle.y}px`;
  board.style.left = `${paddle.x}px`;
  board.style.marginBottom = `${BoardMB}px`;
}
