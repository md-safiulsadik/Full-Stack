//          Variables --> let, const 
// data type: String, Numbers, Boolean, undefined

const name = 'Sadik';
const age = 23;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
yo = '#'

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof yo);


//                   Strings

//  Concatenation
console.log('My name is ' + name + ' and I am ' + age + ' years old'); // This is old fusion



//  Template Strings
console.log(`My name is ${name} and I'm ${age}yo`);
const hello = `My name is ${name} and I'm ${age}yo`;
console.log(hello);

const greeting = 'Hello World!';
const item = 'Books, Pens, Papers, Chocolate'
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.substring(0, 5));
console.log(greeting.substring(6).toUpperCase());
console.log(greeting.split(''));
console.log(item.split(', '));



//                  Arrays 

const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers);

const fruits = ['apples', 'oranges', 'Guava', 12, true]; // unlike other languages array in .js can contain different variable in a same array (awesome). 

fruits[fruits.length] = 'Cool';

fruits.push('Mangos');

// fruits.fill('lol');

fruits.unshift('first');

fruits.pop(); // get the last element

console.log(fruits);
console.log(fruits[0], 'are', fruits[fruits.length - 1]);


//                   Object literal

const person = {
    firstName: 'Safiul',
    lastName: 'Sadik',
    age: 23,
    languages: ['C', 'Java', 'Python', 'JavaScript'],
    address: {
        street: '123 fake st.',
        city: 'Dhaka',
        state: 'none'
    }
}


console.log(person);
console.log(person.address.city, person.address.street, person.address.state);
console.log(person.languages);

const { firstName, lastName, address: { city, street }, languages} = person;

person.email = `${firstName}${lastName}@gmail.com`;

languages.fill('LOL');
console.log(firstName, lastName, city, street, languages);