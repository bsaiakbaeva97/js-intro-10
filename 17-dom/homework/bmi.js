const formBMI = document.querySelector('.container');

formBMI.addEventListener('submit', (event) => {
    event.preventDefault();
    const results = document.getElementById('results');
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const heightInMeters = height / 100

    if(weight > 0 && height > 0) {
        results.innerHTML = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    } else {
        results.innerHTML = 'Please enter valid weight and height!'
    }
    
});

