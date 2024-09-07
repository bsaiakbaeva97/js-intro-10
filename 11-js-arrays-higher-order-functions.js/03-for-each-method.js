const names = [ 'James', 'John', 'Alex', 'Mariia' ];

for (const name of names) {
    console.log(name);
}

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

const printName = function (name) {
    console.log(name);
}
names.forEach(printName)


names.forEach((name) => console.log(name));

names.forEach((name) => console.log(name.toUpperCase()));

names.forEach((name) => console.log(name[0] + name.at(-1)));

names.forEach((name) => {
    if(name.length === 4) console.log(name);
});

let count = 0;
names.forEach((name) => {
    if(name.length === 4) count++;
});

console.log(count);


const result = [];

names.forEach((name) => {
    return result.push(name.length);
});

console.log(result);

const result2 = (names.map((name) => name.length));
console.log(result);

