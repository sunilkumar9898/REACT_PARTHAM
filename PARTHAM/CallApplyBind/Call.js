function greet (greeting, puncatutation) {
    console.log(`${greeting} , ${this.name} , ${puncatutation}`);

}

const Person1 = {
    name:"David"
}

const Person2 = {
    name: "Carsh"
}

greet.call(Person1 , 'Hello', '!')
greet.call(Person2 , 'Hello', '!')