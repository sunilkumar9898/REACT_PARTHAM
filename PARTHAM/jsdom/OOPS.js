// const  person ={
//   name:"Alice",
//   greet: function(){
//     console.log("Hello My Name Is" + this.name)
//   }
// }
// person.greet()



// function Person(name,age){
// this.name= name,
// this.age=age
// }

// Person.prototype.greet = function(){
//   console.log(`Hello My Name is ${this.name}`)
// }
// const person1 = new Person('Boby' , 25)
// person1.greet()

// class Person{
//   constructor(name,age){
//     this.name = name,
//     this.age = age
//   }

//   greet(){
//     console.log(`Hello My Name Is ${this.name} And my age is ${this.age}`)
//   }
// }

// const person2 = new Person("Sunil Kumawat" , 28)
// // person2.greet()


// class Employee extends Person{
//   constructor(name,age,JobTitle){
// super(name,age);
// this.JobTitle = JobTitle;
//   }
//   describeJob(){
//     console.log(`${this.name} works as a ${this.JobTitle}`)
//   }
// }

// const Employee1 = new Employee("Sunil Kumawat" , 28 ,"React Developer");
// Employee1.greet();
// Employee1.describeJob()


// class BankAccount{
//   #balance = 0;
//   deposit(amount){
//     if(amount>0) this.#balance+=amount
//   }
//   getBalance(){
//     return this.#balance
//   }
// }

// const account = new BankAccount();
// account.deposit(10120)
// console.log(account.getBalance());
// console.log(BankAccount.#balance);

// class Animal {
//     speak () { console.log("Animal makes a sound") }
// }

// class Dog extends Animal {
//     speak () { console.log("Dogs barks") }
// }

// class Cat extends Animal {
//     speak () { console.log('Cat meows') }
// }


// class Goat extends Cat {
//     speak () { console.log('Goat myyyaaaaaa') }
// }

// const animals = [new Dog(), new Cat(), new Goat()];
// animals.forEach(animal => animal.speak());

// class Car{
//     #engineStarted = false;
//     #checkEngine () {
//         console.log("Running engine diagnostice.....");
//         return true
//     }
//     start () {
//         if (this.#checkEngine()) {
//             this.#engineStarted = true;
//             console.log('Engine started successfuly');

//         }
//     }
//     drive () {
//         if (this.#engineStarted) {
//             console.log('Car is Moving');
//         } else {
//             console.log("please start the car first");

//         }
//     }
// }

// const myCar = new Car();
// myCar.drive();
// myCar.start();
// myCar.#checkEngine()