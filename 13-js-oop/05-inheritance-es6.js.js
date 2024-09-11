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

class Professor extends Instructor{
    research(){
        console.log('Research');
    }
}
const p1 = new Professor();
p1.research();
