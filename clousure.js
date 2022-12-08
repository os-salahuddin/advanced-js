
//Clousure
function person()
{
    let name = 'salahuddin';
    return function(profession) {
        return name + ' is a ' + profession + ' professional'
    }
}

let personObj = new person();
console.log(personObj('SE'));


// Arrow function
let doIt = (id)=> {
    return true;
}

console.log(doIt(1));

let go = (id) =>({ result(){} });

console.log(go(22));

const object = {
    amount:1000,
    discount: (amount, discountAmount = 10) => {
        return amount - discountAmount;
    },
};

console.log(object.discount(100));

// check undefined type
function add(a, b) {
    b = (typeof b == "undefined") ? 4: b;

    return a + b;
}

console.log(add(10));


// use of get
const obj = {
    log:[1,2,3],
    get latest() {
        return this.log[0];
    }
};

console.log(obj.latest);


//rest operator
function sum(...data) {
    console.log(data);
}

sum(1,2,3);

//spread operator
function display(...data) {
    console.log(data);
}

display([1,2,3]);


//use of fetch
import fetch from 'node-fetch'
fetch('https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/')
    .then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log(error);
});

// use of set
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
};

language.current = 'English';
language.current = 'French'

console.log(language.log);
//use of array unshift and sort
let arr = [1,2,3];
arr.unshift(4,5,6);
console.log(arr.sort());

// check == vs ===
console.log(0 == '0');
console.log(0 === 0);

// object comparison
const joe1 = { name: 'Joe' };
const joe2 = { name: 'Joe' };
console.log(joe1 === joe2);// false beacuse of different object

// callback function and setTimeout
async function sayMessage(message, callback)
{
    return setTimeout(function () {
        callback(message);
    }, 2000);
}

//sayMessage('hello', console.log);

function showMessage(message)
{
    console.log(message);
}
function displayMessage(message, callback)
{
    console.log('some work done');
    let newMessage = message + ' after some work done';
    callback(newMessage);
}

displayMessage('hello world', showMessage);

// use of async and await
async function sayHello() {
    return await sayMessage('hello', console.log);
}

sayHello().then((r) => {
   console.log(r);
});

