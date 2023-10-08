import { Address } from "./Address";

class Employee{
    id! : string; 
    name! : string;
    lastName! : string;

    Address! : Address;

    constructor(id : string, name : string, lastName:string,addr:Address){
        this.id = id;
        this.name=name;
        this.lastName=lastName;
        this.Address=addr;
    }
}

let addr = new Address();

let Employee1 = new Employee("Emp101","Abhishek","Mukherjee",new Address());

console.log(Employee1);
console.log(addr);