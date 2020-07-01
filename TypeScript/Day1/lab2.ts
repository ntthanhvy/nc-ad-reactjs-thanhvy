interface IPerson {
    firstName: string
    lastName: string
    sayHi: () => string
}

class Person implements IPerson {
    firstName = "";
    lastName = "";
    sayHi = () => `Hi ${this.firstName} ${this.lastName}`
}