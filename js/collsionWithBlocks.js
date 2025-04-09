export function Leftcolid(ball, block) {
  return ball.left >= block.y + block.height;
}
export function RightColid(block) {
  return ball.right <= block.x;
}
export function BottomColid(ball, block) {
  return (
    ball.top <= block.bottom &&
    ball.x <= block.x + block.width &&
    ball.x >= block.x &&
    ball.bottom >= block.top
  );
}
