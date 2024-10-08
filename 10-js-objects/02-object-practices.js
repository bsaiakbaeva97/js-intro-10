const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
  };
  
  console.log(person);
  
  // Find and print person's city and state -> 'Chicago, IL'
  // Find and print person's favCities -> ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco']
  // Print 'GOOD GUY' if the person likes JS, or 'STAY AWAY GUY' otherwise -> 'GOOD GUY'
  

  let city = person.address.city;
  let state = person.address.state;
  console.log(`${city}, ${state}`);

  console.log(person.favCities);

  if(person.likesJS) console.log('GOOD GUY');
  else console.log('STAY AWAY GUY')
  

  
  
  
  
  
  