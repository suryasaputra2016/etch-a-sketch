setupCanvass(16);

function addHue(event) {
    event.target.setAttribute("class", "pixel hovered");
}

// reset grid
let newGrid = document.querySelector('.new-grid');
console.log(newGrid);
newGrid.addEventListener('click', resetGrid);

function resetGrid() {
    let grid = parseInt(prompt("How Many row and column do you want (Enter a number from 1 to 100):", '16'));
    if(grid>100) {
        grid = 100;
    }
    if(grid<1) {
        grid = 1;
    }

    setupCanvass(grid);
}

function setupCanvass(grid) {
    const container = document.querySelector('.container');
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i=0; i<grid; i++) {

        let row = document.createElement('div');
        row.setAttribute("class", "row");
    
        let children = row.children;
    
        for(let i=0; i<grid; i++) {
            row.appendChild(document.createElement('div'));
        }
    
        for(child of children) {
            child.setAttribute("class", "pixel");
        }
    
        container.appendChild(row);
    }
    
    // pen action
    let pixels = document.querySelectorAll('.pixel');
    
    for(pixel of pixels) {
        pixel.addEventListener('mouseover', addHue);
        pixel.addEventListener('mouseout', addHue);
    }
}