class Customer{
    constructor(fname, lname, id){
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
}

class PrimeCustomer extends Customer{
    constructor(fname, lname, id, primeCode){
        super(fname, lname, id);
        this.primeCode = primeCode;
    }
}

const customer = new Customer('John', 'Doe', 123);
const primeCustomer = new PrimeCustomer('Alex', 'Smith', 789, 'ABC');

console.log(customer);
console.log(primeCustomer);