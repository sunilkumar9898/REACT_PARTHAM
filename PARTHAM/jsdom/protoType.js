// let animal = {
//     eats:true
// }

// let rabbit = Object.create(animal)
// console.log(rabbit.eats) // true (inherited);
// console.log(typeof rabbit) ;

// function Person (name) {
//     this.name = name
// }

// Person.prototype.sayHello = function () {
//     console.log("Hello , I'am "+ this.name);
// }

// let alice = new Person("Ramu")
// alice.sayHello();
// Person("sunil")

// let car = {
//     wheels:4
// }

// let myCar = {
//     brand: "Toyoto",
//     __proto__:car
// }
// console.log(myCar.wheels);

// let user = {
//     active:true
// }


// let admin = Object.create(user);
// admin.active = false;
// console.log(admin.active);
// console.log(user.active);



// let grandParent = { a: 1 };
// let parent = Object.create(grandParent)
// let child = Object.create(parent);
// let child1 = Object.create(child);
// console.log(child1.a);



// let vehicle = {};
// let car = Object.create(vehicle)
// console.log(vehicle.isPrototypeOf(car));

// let dog = { barks: true }
// let puppy = Object.create(dog);
// console.log(Object.getPrototypeOf(puppy)===dog);


// function Animal(){}
// Animal.prototype.speak = function () {
// return "Animal Sound"
// }

// let lion = new Animal();

// console.log(lion.speak());


// function Cat () { }
// Cat.prototype = {
//     meow: function () {
//         return "Meow!"
//     }
// };

// let kitty = new Cat();
// console.log(kitty.meow());

// class user{
//     greet () {
//         return "Hi!"
//     }
// }
// let u = new user()
// console.log(u.greet());

// let animal = {
//     eats:true
// }

// let rabbit = {
//     jumps:true
// }
// let a = rabbit.__proto__
//     a = animal
// console.log(a);


// rabbit.__proto__ = animal;
// console.log(rabbit.jumps);
// console.log(rabbit.eats);
// console.log(rabbit);


// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps: true,
//     __proto__ :animal
// }
// let whiteRabbit = {
//     color: "white",
//     __proto__:rabbit
// }
// console.log(whiteRabbit.color);
// console.log(whiteRabbit.jumps);
// console.log(whiteRabbit.eats);


class Animal{
    constructor (name) {
        this.name = name;
    }
    speak () {
        console.log(`${this?.name} makes a noise`);

    }
}

class Dog extends Animal{
    bark () {
        console.log(`${this.name} barks`);

    }
}
let dog = new Dog("Buddy")
dog.speak();
dog.bark();






