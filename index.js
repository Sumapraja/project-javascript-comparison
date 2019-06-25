const nameA = 'Irfan Risyad'
let nameB = prompt('What\'s your name?')
const nameCompared = nameA === nameB

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

const ageA = 23
let ageB = prompt('How old are you?')  //output is string
parseInt(ageB)
if (ageA > ageB) {
    console.log('I\'m older than you');
    alert(`Hello there ${nameB} it seems that i\'m older than you`)

} else if (ageA < ageB) {
    console.log('You\'re older than me');
    alert(`Hello there ${nameB} it seems that you\'re older than me`)
} else {
    console.log('We\'re the same age');
    alert(`Hello there ${nameB} it seems that we\'re about the same age`)
}

alert(`so, can you guess how old i am?`)
let guess = prompt('Guess, how old am i?')
parseInt(guess)

for (guess == ageA; guess != ageA; guess = prompt('try again')) {
    if (guess < ageA) {
        alert('nope, i\'m older than that')
    } else if (guess > ageA) {
        alert('nope, i\'m younger than that')
    }
}
alert('YES!! You\'re right!!')

const personA = {
    name: 'irfan',
    age: 22
}
const personB = {
    name: 'risyad',
    age: 22
}

switch (true) {
    case personA.age > personB.age:
        console.log('irfan\'s age is greater than risyad\'s');
        break
    case personA.age < personB.age:
        console.log('risyad\'s age is greater than irfan\'s');
        break
    default:
        console.log('both are the same age');
}