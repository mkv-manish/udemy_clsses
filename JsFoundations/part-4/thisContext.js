const person = {
    name: "Manish",

    greet() {
        console.log(`Hi I Am ${this.name}`);
        
    },
};

person.greet();

const greetFunction = person.greet
greetFunction()