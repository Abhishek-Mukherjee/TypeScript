"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("./Address");
class Employee {
    constructor(id, name, lastName, addr) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.Address = addr;
    }
}
let addr = new Address_1.Address();
let Employee1 = new Employee("Emp101", "Abhishek", "Mukherjee", new Address_1.Address());
console.log(Employee1);
console.log(addr);
