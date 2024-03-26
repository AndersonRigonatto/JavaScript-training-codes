'use strict';

/*

const bookings = [];

// Para settar valores 

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined , 1000)
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight; // Como estamos criando uma nova variavel, o endereco eh outro
const passenger = jonas; // O endereco de um objeto leva ao objeto e, por isso, funciona

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5)
*/

/*

// Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steve');

greet('Hello')('Jonas');

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greeterHiArr = greet('Hi');
greeterHiArr('Anderson')
greetArr('What\'s up')('Anderson')

*/

/*

// The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Anderson Rigonatto');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Desta forma o 'this' vai ser undefined, entao temos que usar 1 dos 3 metodos pra fazer
// com que o this funcione como queremos
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
// Hoje em dia nao eh muito usado visto que temos o Spred Operator
// que basicamente pode fazer com que um array se "espalhe"
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// Books for only flight number 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Anderson Rigonatto');
bookEW23('Denilson Rigonatto');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRet = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATRet = addTaxRet(0.23);
console.log(addVATRet(100));
console.log(addVATRet(23));
*/

/* 
///////////////////////////////////////
// Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results.
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
If type is 'array', simply display the results array as it is, using console.log().
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // THis generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
        );
        
        // Checando se a resposta eh um numero
        if (typeof answer === 'number') {
          // Checando se a resposta esta dentro da faixa de valores aceitos
          if (answer >= 0 && answer <= 3) {
            this.answers[answer]++;
          } else {
            alert('Choose a number between 0 and 3');
          }
        }
        
        this.displayResults();
      },
      
      displayResults(type = 'array') {
        if (type === 'array' || type === '') console.log(...this.answers);
        if (type === 'string') console.log(`Poll results are ${[...this.answers]}`);
      },
    };
    
    const registerPoll = poll.registerNewAnswer.bind(poll);
    
    document.querySelector('.poll').addEventListener('click', registerPoll);
    // poll.registerNewAnswer();
    
*/

/*
    const runOnce = function () {
      console.log('Uma vez');
    };
    
    runOnce();
    
(function () {
  console.log('Uma vez');
  const isPrivate = 23; // Encapsulado
})();

// console.log(isPrivate);

(() => console.log('Uma vez'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*
const secureBooking = function(){
  let passengerCount = 0;
  
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker)
*/

/*
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Reassigning f function
h();
f();
console.dir(f); // Olhar o valor na CLOSURE

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};


const perGroup = 1000; // Provando que a CLOSURE tem prioridade sobre o Global Scope
boardPassengers(180, 3);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked.Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need.
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
  // header.addEventListener('click', function(){
  //   header.style.color = 'blue'
  // })
})();

// Apesar o Ambiente de contexto ja ter ido "embora", visto que eh uma IIFE, onde ela ja foi chamada, executada e finalizada
// a funcao de mudar a cor foi criada dentro desse contexto e ainda pode acessar as variaveis criadas, como, por exemplo,
// a variavel header, que ainda existe na closure, mesmo a funcao(sem nome) ja ter sido executada e seu contexto "ter ido embora"
