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

const { firstName, lastName, address: { city, street }, languages } = person;

person.email = `${firstName}${lastName}@gmail.com`;

languages.fill('LOL');
console.log(firstName, lastName, city, street, languages);

const toDo = [
    {
        id: 1,
        text: 'Read: A Productive Muslim',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Code: DSA',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Take a bath',
        isCompleted: true
    },
    {
        id: 4,
        text: 'Workout',
        isCompleted: false
    }
];

console.log(toDo);

const toDoJSON = JSON.stringify(toDo);
console.log(toDoJSON);

for (let task of toDo) {
    console.log(task.id, task.text);
}




//            forEach, map, filter

toDo.forEach(task => {
    console.log(task.text);
});

const toDoText = toDo.map(task => {
    return task.text;
});
console.log(toDoText);


const toDoCompleted = toDo.filter(task => {
    return task.isCompleted === true;
}).map(task => {
    return task.text;
});
console.log(toDoCompleted);


//          Conditionals

const X = '10';

if (X === 10) {
    console.log(`X is ${X}`);
} else {
    console.log(`X is not 10`);
}

if (X == 10) {  // == don't care about the variable type.
    console.log(`X is ${X}`);
}

const color = x > 10 ? 'red' : 'yellow'
console.log(color);


//          Switch

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}


//          Functions

const num1 = 10, num2 = 20;

// function addNumber(num1, num2) {
//     return num1 + num2;
// }

const addNumber = (num1, num2) => {
    return num1 + num2;
}
const multiNumber = (num1, num2) => num1 * num2;

const addition = addNumber(num1, num2)
console.log(addition);

console.log(multiNumber(num1, num2));
// const multiplication = multiNumber(num1, num2)
// console.log(multiplication);