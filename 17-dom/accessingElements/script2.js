
// Access single element by id
const heading = document.getElementById('heading');
console.log(heading);


// Access multiple elements by class
const boxes = document.getElementsByClassName('box');
console.log(boxes);

boxes[0];
boxes.item(0);

for(let i = 0; i< boxes.length; i++){
    console.log(boxes[i]);
}

//Access single element. It returns first occurence of the element.
const section = document.getElementsByTagName('section');
console.log(section)

const heading1 = document.querySelector('#heading');
const heading2 = document.querySelector('h1');
const heading3 = document.querySelector('.heading')
console.log(heading1);

// Access all elements
const boxes3 = document.querySelectorAll('.box');
console.log(boxes3);

