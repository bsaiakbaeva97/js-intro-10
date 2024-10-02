// Traversing DOM

const parentEl = document.getElementById('parent');
const child1El = document.getElementById('child1');
const child2El = document.getElementById('child2');
const child3El = document.getElementById('child3');

console.log(child1El.parentNode);
console.log(parentEl.parentNode);

console.log(parentEl.childNodes);

//First and last
console.log('First child', parentEl.firstChild);
console.log('Last child', parentEl.lastChild);

//previousSibling, nextSibling
console.log('Previous sibling to child1', child1El.previousSibling);


/*  Elements only */

//parentElement


//children
console.log('Children of parent div', parentEl.children);

//fisrtElementChild, lastElementChild
console.log(parentEl.firstElementChild);
console.log(parentEl.lastElementChild);

//Accessing middle element

console.log('Child2', child1El.nextElementSibling);
console.log('Child2', child3El.previousElementSibling);


