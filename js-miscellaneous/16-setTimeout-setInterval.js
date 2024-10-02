setTimeout(() => {
    console.log('Hello World')
}, 5000);

const interval = setInterval(() => {
    console.log('TechGlobal')
}, 2000);

setTimeout(() => {
    clearInterval(interval)
}, 10000);