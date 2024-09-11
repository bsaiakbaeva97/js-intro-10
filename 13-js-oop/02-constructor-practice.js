console.log ('\n---------------TASK-1--------------/n');

// 1. Create Prototype
function Teacher(fname, lname, age, field) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.field = field;
}
 // Function

Teacher.prototype.teach = function () {
    console.log(`${this.fname} teaches ${this.field}!`);
};

Teacher.prototype.giveHomework = function() {
    console.log(`${this.fname} gives homework!`);
};

 // Objects
const teacher1 = new Teacher('Aikokul', 'Arzykeeva', 32, 'International Development');
const teacher2 = new Teacher('Marat', 'Sarulu', 62, 'Art Through The Ages');
const teacher3 = new Teacher('Lauren', 'McConnell', 60, 'Scriptwriting');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

teacher1.giveHomework();
teacher2.teach();

console.log ('\n---------------TASK-2--------------/n');

// 2. Create Class 

class Instructor{
    constructor(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
    }

 // Function
    teach() {
        console.log(`${this.fname} gives homework!`);
    }
    giveHomework() {
        console.log(`${this.fname} gives homework!`);
    }
}

// Object
const instructor1 = new Instructor('Aikokul', 'Arzykeeva', 32, 'International Development');
const instructor2= new Instructor('Marat', 'Sarulu', 62, 'Art Through The Ages');
const instructor3 = new Instructor('Lauren', 'McConnell', 60, 'Scriptwriting');

console.log(instructor1);
console.log(instructor2);
console.log(instructor3);

instructor1.teach();
instructor2.giveHomework();


console.log ('\n---------------TASK-3--------------/n');

// Store all the ages in an array 

const instructors = [instructor1, instructor2, instructor3];

const getAges = (instructors) => instructors.map((instructor) => instructor.age)

console.log(getAges(instructors)); // [ 32, 62, 60 ]

console.log ('\n---------------TASK-4--------------/n');

// Store all the first names in an array 

const getFnames = (instructors) => instructors.map((instructor) => instructor.fname)

console.log(getFnames(instructors)) // [ 'Aikokul', 'Marat', 'Lauren' ]

console.log ('\n---------------TASK-5--------------/n');

// Find and print the information of the oldest teacher 

const maxAge = (Math.max(...getAges(instructors)));

const oldestInstructor = (instructors) => instructors.filter((instructor) => instructor.age === maxAge);

console.log(oldestInstructor(instructors));  