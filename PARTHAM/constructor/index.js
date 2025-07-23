function User (name,role) {
    this.name = name ?? "guest";
    this.role = role ?? "guest"
}


const u1 = new User("SG", "ADMIN")
console.log(u1, 'u1');


const u2 = new User();
console.log(u1?.role);

