const container = document.getElementById('container');
const colors = ['#EE0F0F', '#1595F7', '#78E92C', '#FAFA4B', '#CA36C0'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
}

function setColor(element) {
    const color = getRandomColor(); 
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
} 


function removeColor(element) {
    element.style.background = `#1d1d1d`;
    element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}