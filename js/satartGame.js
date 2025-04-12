export function startGame() {
    document.addEventListener("keyup", function start(e) {
      if (e.key === " ") {
        const p = [-speedBall, speedBall, 0];
        let i = Math.floor(Math.random() * p.length);
        ballDetails.velocityX = p[i];
        ballDetails.velocityY = speedBall;
        gameStarted = true;
        document.removeEventListener("keyup", start);
      }
    });
  }