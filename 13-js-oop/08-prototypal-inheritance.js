const person = {
    eat: function () {
        console.log('EAT');
    },
    sleep: function() {
        console.log('SLEEP')
    }
}

const singer = {
    
    sing: function(){
        console.log('SING')
    },
    playGuitar: function () {
        console.log('PLAY GUITAR');
      },
      __proto__: person
    };
    
    singer.walk();
    singer.eat();
    singer.sleep();
    singer.sing();
    singer.playGuitar();
    console.log(singer.fname);
    
    console.log(singer.__proto__); // returns person object
    console.log(person.__proto__); // [Object: null prototype] {}
