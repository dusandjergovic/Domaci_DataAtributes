const grid = document.querySelector('.grid');


for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', function() {
        cell.style.backgroundColor = 'black';
    } )
    cell.classList.add('cell');
        if((j % 2) === 0)  {
            cell.classList.add('crvena')
        } else {
            cell.classList.add('plava')
        }
    grid.appendChild(cell);
  }
}

