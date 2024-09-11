class Engeneer{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    work(){
        console.log('WORK');
    }

    solveProblem(){
        console.log('SOLVE PROPLEM');
    }
}

class Tester extends Engeneer {
    constructor(fname, lname, age, companyName){
        super(fname, lname, age);
        this.companyName = companyName;
    }
    test(){
        console.log('TEST');
    }
}

class SDET extends Tester {
    constructor(fname, lname, age, companyName, pLanguage) {
        super(fname,lname, age, companyName);
        this.pLanguage = pLanguage;
    }
    code(){
        console.log(`Tests in ${this.pLanguage}`);
    }
}



