const container = document.querySelector('#container');
const body = document.body
const slider = document.querySelector('.size')
const sliderValueDisplay = document.getElementById('sliderValue');

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

