const nameA = 'Irfan'
const nameB = 'Risyad'
const nameCompared = nameA === nameB

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

const ageA = 25
const ageB = 25

if (ageA > ageB) {
    console.log('A is greater than B');
} else if (ageA < ageB) {
    console.log('B is greater than A');
} else {
    console.log('Both are great');
}

const personA = {
    name: 'irfan',
    age: 22
}
const personB = {
    name: 'risyad',
    age: 22
}

switch (personA.age > personB.age) {
    case true:
        console.log('irfan\'s age is greater than risyad\'s');
        break
    case false:
        console.log('risyad\'s age is greater than irfan\'s');
        break
    default:
        console.log('both are the same age');
}