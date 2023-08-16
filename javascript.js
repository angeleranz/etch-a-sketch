const container = document.querySelector('#container');
const body = document.body
const slider = document.querySelector('.size')
const sliderValueDisplay = document.getElementById('sliderValue');
const blackButton = document.querySelector('.colorModeBlack');
const whiteButton = document.querySelector('.colorModeWhite');
const rainbowButton = document.querySelector('.rainbowMode');
const eraserButton = document.querySelector('.eraser');
const resetButton = document.querySelector('.reset');
const checkbox = document.getElementById('toggle');



blackButton.addEventListener('click', () => {
    container.addEventListener('mouseover', changeCellColorToBlack);
    container.removeEventListener('mouseover', changeCellColorToWhite);
    container.removeEventListener('mouseover', changeCellColorToRainbow);
})

eraserButton.addEventListener('click', () => {
    container.addEventListener('mouseover', changeCellColorToWhite);
    container.removeEventListener('mouseover', changeCellColorToBlack);
    container.removeEventListener('mouseover', changeCellColorToRainbow);
})

rainbowButton.addEventListener('click', () => {
    container.addEventListener('mouseover', changeCellColorToRainbow);
    container.removeEventListener('mouseover', changeCellColorToBlack);
    container.removeEventListener('mouseover', changeCellColorToWhite);
})

resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    slider.value = 16;
    gridSize = 16;
    sliderValueDisplay.textContent = gridSize;
    const cellSize = 500 / gridSize;
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
    defaultGrid();
})

slider.addEventListener('input', () => {
    const gridSize = slider.value;
    sliderValueDisplay.textContent = gridSize;

    container.innerHTML= '';

    const cellSize = 500 / gridSize;
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
    
    const square = gridSize * gridSize;
    for (let i = 0; i < square; i++){
        createCells();
    }
})

function changeCellColorToBlack(e) {
    if (e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = 'black';
    }
}

function changeCellColorToWhite(e) {
    if (e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = 'white';
    }
}

function changeCellColorToRainbow(e) {
    if (e.target.classList.contains('cell')) {
        const randomColor = generateRandomColor();
        e.target.style.backgroundColor = randomColor;
    }
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createCells(){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = "white"
    container.appendChild(cell);
}

function squareNum(gridSize){
    let square = gridSize * gridSize;
    return square;
}

// Set the initial grid properties
container.style.gridTemplateColumns = 'repeat(16, 6.25%)';
container.style.gridTemplateRows = 'repeat(16, 6.25%)';

// Initialize the grid
defaultGrid();

function defaultGrid() {
    const square = 16 * 16; // Default grid size is 16x16
    for (let i = 0; i < square; i++) {
        createCells();
    }
}

checkbox.addEventListener('change', function() {   
    let cells = document.querySelectorAll('.cell');
    
    if(this.checked) {
        cells.forEach(function(cell) {
            cell.style.border = 'solid 1px rgb(167, 167, 167)';
        });
    } else {
        cells.forEach(function(cell) {
            cell.style.border = "";
        });
    }
});

