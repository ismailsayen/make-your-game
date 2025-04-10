// export function RightColid(ball, block) {
//   return ball.left >= block.y + block.height;
// }
export function Leftcolid(ball, block) {
  return (
    ball.x + ball.width >= block.x &&
    ball.x < block.x &&
    ball.bottom > block.top &&
    ball.top < block.bottom
  );
}
export function BottomColid(ball, block) {
  return (
    ball.top <= block.bottom &&
    ball.x <= block.x + block.width &&
    ball.x >= block.x &&
    ball.bottom >= block.top
  );
}
