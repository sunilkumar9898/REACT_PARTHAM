
// function sum (a, b) {
//     return a + b
// }
// sum(3, 5)
// 8
// function name (params) {
//     return `hello ${params}`
// }

// name(sunil)

// name("sunil")
// 'hello sunil'
// const add = (a, b) => a + b;
// undefined
// add(2, 3)
// 5


// const greet = (name) =>  `Hello ${name}`
//     greet("Sunil)

    // const greet = (name) => `Hello ${name}`;
    // greet("Sunil")
    // 'Hello Sunil'
    // const greet = name => `Hello ${name}`;
    // greet("Sunil")
// 'Hello Sunil'

// const sayHi = () =>console.log('Hi!');
// sayHi();
// const multiply = (a, b) => {
//     const result = a * b;
//     console.log(result);

// }
// multiply(5, 4)

// const person = {
//     name: "sunil",
//     greet: function () {
//         console.log(`Hello my name is ${this.name}`);

//     }

// }
// person.greet();

// const person = {
//     name: "sunil",
//     greet:()=> {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
// person.greet();

// function Timer () {
//     this.seconds = 0;
//     setInterval(() => {
//         this.seconds++
//         console.log(this.seconds);

//     }, 1000);
// }


// new Timer()

// function Timer () {
//     let seconds = 0;
//     setInterval(() => {
//         seconds++
//         console.log(seconds);

//     }, 1000);
// }
// new Timer()

// function Timer () {
//     let seconds = 0;
//     setInterval(() => {
//         this.seconds++
//         console.log(this.seconds);
//     }, 1000);
// }
// new Timer()

// DAY 2

// < !DOCTYPE html >
//     <html>
//         <body>

//             <h1>The Element Object</h1>
//             <h2>The addEventListener() Method</h2>

//             <p>Execute a function when a user clicks on a button:</p>

//             <button id="mybtn">TRY it!</button>
//             <p id="demo"></p>

//             <button id="mybtn1">TRY it!</button>
//             <p id="demo1"></p>
//             <script>
//                 const element = document.getElementById('mybtn');
//                 element.addEventListener("click",myFunction("Manjet"))

//                 function myFunction(name){
//                     document.getElementById("demo").innerHTML = `Hello world ${name}`
//                 }

//                 const element1 = document.getElementById('mybtn1');
// element1.addEventListener("click",()=>myFunction1("Ramu"))

//                 function myFunction1(name){
//                     document.getElementById("demo1").innerHTML = `Hello world ${name}`
//                 }
//             </script>
//         </body>
//     </html>



// <script>
//     function showCoords(event) {
//         let x = event.clientX;
//     let y = event.clientY;
//     let text = "X coords: " + x + ", Y coords: " + y;
//     document.getElementById("demo").innerHTML = text;
// }
// {/* </script> */}

function abc () {
    if (true) {
        var a = 1;
        let b = 2
        const c = 3
        console.log(a, b, c)
    }
    console.log('outer', a)

}
abc()