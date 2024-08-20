console.log((3=="3"||2+5==="7")&&!(5<10||!false)); // false

console.log((!true && !false) || 5*2 === true * 10); // true

console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0); // false

console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5)); // false

console.log(! (2 + 2 === 8 / 2 && !false && 10 % 2 === 0)||25 % 4 == "1"); //true

console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange")); //false

console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false)); //true

console.log("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false) // true

console.log((4>=3&&5*2==="10")||!(7!=="7"&&"dog"==="cat")); // true

console.log((20%6!==0&&"apple"==="orange")||!(2+2===4&&true)); //false

console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10)); // false

console.log((5+3>="8"&&2**3==="8")||!(false||true)); // false

console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true)); // true

console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0)); // true

console.log((5*2===9||true)&&!(10-5!==5&&10%3===1)); // true



// Questions
console.log(" "==false); // Why it is true? It should be false; non empty string = NaN and false = 0; OR non-emty string is always truthy vale

console.log("3"*"5">=15&&true==1&&" "==false&&""===0); // false

