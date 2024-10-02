

const boxEl = document.getElementById('box1');
console.log('Style object', boxEl.style);

boxEl.style.border ='2px solid grey'
boxEl.style.backgroundColor = 'lightgrey'
boxEl.style.color = 'red'

// Loop

const boxes = document.querySelectorAll('.box');

for(let i = 0; i < boxes.length; i++){
    boxes[i].style.border = '2px solid black';
    boxes[i].style.backgroundColor = 'aqua';
    boxes[i].style.color = 'red';
}

