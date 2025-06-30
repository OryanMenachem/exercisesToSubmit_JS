// exercise 1

// function Phone(brand, model)
// {
//     this.brand = brand;
//     this.model = model;
//     this.details = function() {console.log(`brand: ${brand}. model: ${model}.`)
//     }

// }

// const P1 = new Phone("Samsung", "S22");
// P1.details()


// exercise 2

// function Rectangle(width, height)
// {
//     this.width = width;
//     this.height = height;
//     this.area = function() {
//         return width*height;
//     }
// }

// const rectangle1 = new Rectangle(6,8);
// console.log(rectangle1.area());


// // exercise 3

// function bankAccount(owner, balance)
// {
//     owner = owner;
//     balance = balance;

//     deposit = function(amount) {
//         balance += amount;
//     }

//     withdraw = function(amount) {
//         if ((balance - amount) >= 0)
//         {
//             balance -= amount;
//         }
//         else
//         {
//             console.log("There is not enough money in your account.");
            
//         }

//     }

//     checkBalance = function(){
//         console.log(`balance: ${balance}`);
        
//     }
// }

// const owner1 = bankAccount;
// owner1("David",1000);
// withdraw(1200);
// deposit(300);
// checkBalance();



// exercise 4

// function Animal(name){
//     this.name = name;
//     this.speak = function() {
//         console.log(`${this.name} makes a sound`);
        
//     }
    
// }

// function Dog(){

//     this.bark = function() {
//         console.log(`${this.name} barks`);
        
//     }
// }

// const animal1 = new Animal();

// const dog1 = new Dog();


// Object.setPrototypeOf(dog1, animal1);
// dog1.name = `Rocky`


// dog1.speak();

// dog1.bark()

// exercise 5

// function Vehicle(type){
//     this.type = type;
//     this.describe = function(){
//         console.log(`This is a ${this.type}`);
        
//     }
// }

// const vehicle1 = new Vehicle();

// function Car(brand){
//     this.brand = brand;
//     this.info = function() {
//         console.log(`brand: ${this.brand}\ntype: ${this.type}`);
        
//     }
// }

// const car1 = new Car(`Zibar`);

// Object.setPrototypeOf(car1, vehicle1);

// car1.type = 'car';

// car1.describe()

// car1.info()


// exercise 6

// function Shape(){
//     this.area = function(){
//         return 0;
//     }
// }

// const shape1 = new Shape();

// function Circle(radius){
//     this.area = function(){
//         return Math.PI * (radius*radius);
//     }
// }

// const circle1 = new Circle(5);

// function Square(side){
//        this.area = function(){
//         return side*side;
//     }

// }

// const square1 = new Square(7);

// Object.setPrototypeOf(circle1, shape1)

// Object.setPrototypeOf(square1, shape1)

// console.log(shape1.area())

// console.log(circle1.area())

// console.log(square1.area())


// exercise 7
// function Book(title, author){
//     this.title = title;
//     this.author = author;
//     this.info = function(){
//         console.log(`${this.title} by ${ this.author}`);
        
//     }

// }

// const book1 = new Book(`The Hobbit`, `Tolkien`)

// book1.info()



// exercise 8


// function Person(name) {
//     this.name = name;
//     this.greet = function(){
//         console.log(`Hello I'm ${this.name}`);
        
//     }
// }

// const person1 = new Person();

// function Student(name, school){
//     this.name = name;
//     this.school = school;
//     this.study = function(){
//         console.log(`${this.name} is studying at ${this.school}`);
        
//     }

// }

// const student1 = new Student(`Alice`,`Ariel University`)

// Object.setPrototypeOf(student1, person1)

// student1.greet()

// student1.study()


// exercise 9

class Employee {

    #salary;

    constructor() {

        this.#salary = 12000;
    }

    getSalary() {
        return this.#salary       
    }

    work(){
        console.log(`Employee is working`);
        
    }

}

const employee1 = new Employee();

class Manager extends Employee  {

    work() {
        console.log(`Manager is managing`);
        
    }
    
}

const manager1 = new Manager()


employee1.work();

console.log(manager1.getSalary());

manager1.work();


