"Use Strict"
const Person = {
    name: "Jhone Doe"

}
function greet (age,city) {
    console.log(`Hello my name is ${this.name} age:${age} & city ${city}`);

}

const greetBound = greet.bind(Person);
greetBound(25,'jaipur')