// Madness game logic


// Keypress logic
function getKeyInput(e) {				
    var key_code = e.which || e.keyCode
    switch(key_code) {
        case 37: // left arrow key
            moveLeft()
            break
        case 39: // right arrow key
            moveRight()
            break
        case 27: // right arrow key
            escapeKey()
            break	
    }
}
function escapeKey() {
    window.location.href = "index.html"
}

// Increment seconds for the high score
var seconds = 0
const secondsElement = document.getElementById('seconds-counter')

function incrementSeconds() {
    seconds += 1
    secondsElement.innerText = seconds
}


// Ball movement logic
const ballSpeed = 30
function initBall() {
    ball = document.getElementById("ball") // TODO: make variable
    ball.style.position = 'fixed'
    ball.style.left = '600px'
    ball.style.bottom = '60px'
}
function moveLeft() {
    ball.style.left = parseInt(ball.style.left)-ballSpeed+'px'
}
function moveRight() {
    ball.style.left = parseInt(ball.style.left)+ballSpeed+'px'
}

// Block movement logic
const blockSpeed = 15
function generateBlock() {
    block = document.createElement("div") // TODO: make variable
    block.className = "block"
    document.body.appendChild(block)
    block.style.position = 'fixed'
    var min = '300' 
    var max = '1200'
    block.style.left = (Math.floor(Math.random() * (max - min) + min))+'px'
    block.style.top = '20px'
    return block
}
function moveBlock() {
    block.style.top = parseInt(block.style.top)+blockSpeed+'px'
}


// Execute the program
window.onload = initBall
setInterval(incrementSeconds, 1000)
setInterval(moveBlock, 100)
generateBlock()
// setInterval(generateBlock, 1000)
