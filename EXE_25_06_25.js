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
