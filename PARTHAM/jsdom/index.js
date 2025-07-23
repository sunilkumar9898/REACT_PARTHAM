
//Q:1  write a program to print number from1 to 100, which are multiples of 2 and but not multiples of 3


// for (let i = 0; i <= 100; i++){
//     if (i % 2 == 0 ) {
//         if (i % 3!==0) {
//          console.log(i);
//     }
// }

// }


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0 && i % 3 !== 0) {
//             console.log(i);
//     }

// }

// let sum = 0;
// for (let i = 0; i <= 100; i+=2) {
//     if (i % 3 !== 0) {
//     console.log(i);

//     }
// }


// write a program to print an array,
// tis array

// const arr = []
// function getDays (days) {
//     switch (days) {
//         case 0:
//             let day1 = "sunday"
//             arr.push(day1)
//             break;
//         case 1:
//             arr.push("monday")
//             break;
//         case 2:
//             arr.push("Tuesday")
//             break;
//         case 3:
//             arr.push("Wednesday")
//             break;
//         case 4:
//             arr.push("Thursday")
//             break;
//         case 5:
//             arr.push("Friday")
//             break;
//         case 6:
//             arr.push("Saturday")
//             break;

//         default:
//             console.log("invalid day");
//             break;
//     }
//     // console.log(arr.toString().at(0).toLocaleUpperCase().slice(0,1).concat(arr));

// }
// getDays(0);
// arr.push(arr[0].toUpperCase())
// console.log(arr, 'arr');




// console.log(1)

// var temp = 1;
// function hello () {
//     let a = 3
//     return a
// }
// temp=hello()
// console.log(temp);

const person = { name: "sunil", age: 25, city: "jaipur" }
const arr = ['apple', 'mango']
const arr1 = [person]
// console.log(arr1);
const [{ name }] = arr1
console.log(name);


