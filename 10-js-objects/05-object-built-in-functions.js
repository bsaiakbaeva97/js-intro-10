const batch10 = {
    program: 'SDET',
    numberOfStudents: 15,
    durationMonth: 6
};

const allKeys = Object.keys(batch10);
const allValues = Object.values(batch10);
const allEntries = Object.entries(batch10);

console.log(allKeys);
console.log(allValues);
console.log(allEntries);


console.log(`\n--------------------Looping Oject Keys------------------------\n`)

for( const key of Object.keys(batch10)) {
    console.log(key);
};

console.log(`\n--------------------Looping Object Values------------------------\n`)

for( const value of Object.values(batch10)) {
    console.log(value);
};

console.log(`\n--------------------Looping Object Entries------------------------\n`)
for( const entry of Object.entries(batch10)) {
    console.log(entry);
};