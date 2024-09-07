const numbers = [0, 10, -4, 5, 2, -3];

console.log(numbers.find((num) => num > 0)); // 10

console.log(numbers.findIndex((num) => num > 0)) // 1

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA']; 
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

const citiesWith4Ele = cities.find((city) => city.length === 4);
console.log(citiesWith4Ele);

const lastElement = cities.findLast((city) => (city.length === 6));
console.log(lastElement);

const indexOfLA = (cities.findIndex((city) => city === 'LA'));
console.log(indexOfLA);

const firstWithI = cities.find((city) => city.toLowerCase().includes('i'));
console.log(firstWithI);

const lastEle4let = cities.findLast((city) => city.length === 4);
console.log(lastEle4let)