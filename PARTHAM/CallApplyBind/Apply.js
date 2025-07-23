// function greet (age, city) {
//     console.log(`${age} , ${this.name} , ${city}`);

// }

// const Person1 = {
//     name: "David"
// }

// const Person2 = {
//     name: "Carsh"
// }

// greet.apply(Person1, [25, 'jaipur'])


const person3 = {
    fullName: function () {
        return `${this.first} ${this.last}`
    }
}

const anotherFunction = {
    first: "jhon",
    last:"Doe"
}

const fullName = person3.fullName.call(anotherFunction);
const fullName1 = person3.fullName.bind(anotherFunction);
console.log(fullName);
console.log(fullName1());





