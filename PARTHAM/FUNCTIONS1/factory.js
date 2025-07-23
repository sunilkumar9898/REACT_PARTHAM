// function createAccount (name, balance) {
//     return {
//         name,
//         balance,
//         getBalance () {
//             console.log(`Current Balance: ${balance}`);
//         },
//         deposit (amount) {
//             balance += amount;
//             console.log(`Deposited: ${amount}`);
//         },
//         getWithdrawal (amount) {
//             if (amount > balance) {
//                 console.log("withdrowl amonut granter than balance");
//                 return

//             }
//             balance -= amount
//             console.log(`Withdrawal : ${amount}`);
//         }
//     };
// }

// const accountUser = createAccount("sunil", 1000)
// accountUser.getBalance()
// accountUser.deposit(500)
// accountUser.getWithdrawal(200)
// accountUser.getBalance()


// function person(name, age){
//     this.name = name;
//         this.age = age;
//     this.sayHi = function () {
//         console.log(`HI ,${this.name}` );

//     }
// }

// let sg = new person("sunil", 29)
// console.log(sg);
// sg.sayHi()



function CreateAccount (name, balance) {
    this.name = name;
    this.name = balance;

    this.getBalance = function () {
        console.log(`Current Balance - ${balance}`);
    };

    this.deposit = function (amount) {
        balance += amount;
        console.log(`Deposit - ${amount}`);
    };

    this.getWithdrawal = function (amount) {
        if (amount > balance) {
            console.log("Withdrawal amount greater than balance");
            return;
        }
        balance -= amount;
        console.log(`Withdrawal: ${amount}`);
    };
}


const accountUser = new CreateAccount("Sunil", 1000);

console.log(accountUser,'accounuser');

accountUser.getBalance();
accountUser.deposit(500);
accountUser.getWithdrawal(200);
accountUser.getBalance();
