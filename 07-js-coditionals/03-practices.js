/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let exam_score = 59.99;

if(exam_score >= 60){
    console.log('PASS')
} else{ 
    console.log('FAIL');
}



// If you execute a single line code within if else block, you can omit curly braces

if(true)
    console.log('Hi'); console.log('Hello');



let age = 25;

if(age>= 65){ 
    console.log(' YOU CAN GET RETIRED')
} else {
    console.log('YOU CANNOT GET RETIRED!!!');
}

//Ternary operator: used for short if-else statements (? :)




let fname = 'Alex';
let first = false; // if true get first letter is A, if false get the last

if(first) {
    console.log(fname[0]);

}
 else  {console.log(fname.at(-1));
}



