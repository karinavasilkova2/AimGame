const board = document.querySelector('#board')
const colors = ['#98FB98', '#7B68EE', '#FFC0CB', '#F08080', '#F4A460']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    board.append(square)

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(element) {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}