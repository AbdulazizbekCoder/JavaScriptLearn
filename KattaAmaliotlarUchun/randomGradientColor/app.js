const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')

const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'e',
]

function getGradiend(){
    let color = '#'
    for(let i = 0; i < 6; i++){
        const randomColor = Math.trunc(Math.random() * values.length)
         color += values[randomColor]   
    }
    return color
}

function setGradient(){
    const color1 = getGradiend()
    const color2 = getGradiend()
    const randomDeg = Math.trunc(Math.random() * 360)
    const bggradient = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`    
        body.style.background = bggradient
        colorText.textContent = bggradient
}

container.addEventListener('click', setGradient)