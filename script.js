let containerWidth = 800;
let containerHeight = 800;
let paddleWidth = 160;
let paddleHeight = 20;
let ballWidth = 20;
let ballHeight = 20
let paddle = {
    x: containerHeight / 2 - paddleWidth / 2,
    y: containerHeight - paddleHeight - 5,
    width: paddleWidth,
    height: paddleHeight,
}

let ball = {
    x: containerWidth / 2,
    y: paddle.y - ballHeight * 2,
    width: ballWidth,
    height: ballHeight,
    dx: 5,
    dy: -5,
}

let life = 3;

addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.width = containerWidth + 'px'
    container.style.height = containerHeight + 'px'
    const paddleDiv = createPaddle(container)

    const ballDiv = createBall(container)
    addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            moveBall(event, ballDiv)
        } else {
            movePaddle(event, paddleDiv)
        }
    })
})

function createPaddle(container) {
    const paddleDiv = document.createElement('div')
    paddleDiv.className = 'paddle'
    paddleStyle(paddleDiv)
    container.append(paddleDiv)

    return paddleDiv
}

function createBall(container) {
    const ballDiv = document.createElement('div')
    ballDiv.className = 'ball'
    ballStyle(ballDiv)
    container.append(ballDiv)

    return ballDiv
}

function movePaddle(event, paddleDiv) {
    if (event.key === 'ArrowLeft' && paddle.x > 0) {
        paddle.x -= 10
    }

    if (event.key === 'ArrowRight' && paddle.x + paddle.width < containerWidth) {
        paddle.x += 10
    }

    paddleStyle(paddleDiv)
}

function moveBall(event, ballDiv) {
    let reqAnId = requestAnimationFrame(() => {
        moveBall(event, ballDiv)
    })

    if (ball.x + ball.width >= containerWidth || ball.x <= 0) {
        ball.dx = -ball.dx
    }

    if (ball.y <= 0) {
        ball.dy = -ball.dy
    }

    if (ball.y + ball.height >= containerHeight) {
        life--
        cancelAnimationFrame(reqAnId)
        resetBall()
        ballStyle(ballDiv)
        return
        // ball.dy = -ball.dy
    }

    ball.x += ball.dx
    ball.y += ball.dy

    ballStyle(ballDiv)
}

function paddleStyle(paddleDiv) {
    paddleDiv.style.cssText = `
        width: ${paddle.width}px;
        height: ${paddle.height}px;
        transform: translate(${paddle.x}px, ${paddle.y}px);
    `
}

function ballStyle(ballDiv) {
    ballDiv.style.cssText = `
        width: ${ball.width}px;
        height: ${ball.height}px;
        transform: translate(${ball.x}px, ${ball.y}px);
`
}

function resetBall() {
    ball.x = containerWidth / 2
    ball.y = paddle.y - ballHeight * 2
    ball.dx = 5
    ball.dy = -5
}