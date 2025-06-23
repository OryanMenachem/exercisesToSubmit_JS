// exercise 1

// let a = "Hello";

// let b = "Moon";

// a += b;

// b = a.slice(0 , a.length - b.length); 

// a = a.slice(b.length);

// console.log(a);


// exercise 2

// const grid = [
//   ['x', 'X', 'x', 'x', 'X'],
//   ['X', 'x', 'X', 'x', 'x'],
//   ['x', 'x', 'X', 'X', 'x'],
//   ['X', 'X', 'x', 'x', 'X'],
//   ['x', 'X', 'x', 'x', 'x']
// ];

// let sumOfX = 0;

// for (let i = 0; i < grid.length; i++)
// {
//     for (let j = 0; j < grid[i].length; j++)
//     {
//         if (grid[i][j].toLocaleUpperCase() == grid[i][j])
//         {
//             sumOfX++;
//             console.log(i, j);
            
//         }
//     }

// }

// console.log(sumOfX);


// exercise 3

// let names = "";
// let counter = 1;

// const ChildrensNames = {
//     1 : "Moshe",
//     2 : "David",
//     3 : "Beni",
//     4 : "Yossef"
// }

// for (let key in ChildrensNames)
// {
//     if (counter == 3) {console.log(ChildrensNames[key]);}

//     else {names += ChildrensNames[key] + ", "}
//     counter++;
// }

// console.log(names);


//  exercise 4

// const arr = ["Hello", "Moon", "!"];

// for (let i = arr.length - 1; i >= 0; i--)
// {
//     console.log(arr[i]);
// }

//  exercise 5

// const sumTypes = {
//     num : 0,
//     str : 0,
//     bool : 0,
//     obj : 0,
//     nul : 0

// }

// const types = [1,2,"a",true,true,false,null,{},[],{},{}];

// for (let i = 0; i < types.length; i++)
// {
//     if (types[i] == null)
//     {
//         sumTypes.nul +=1;
//         continue;
//     }
//     switch (typeof types[i])
//     {
//         case "number":
//             sumTypes.num += 1;
//             break;
//         case "string":
//             sumTypes.str += 1;
//             break;
//         case "boolean":
//             sumTypes.bool += 1;
//             break;
//         case "object":
//             sumTypes.obj += 1;
//             break;
         

//     }
// }

// console.log(sumTypes);


// exercise 6

// const numbers = [45, 102, 87, 150, 23, 200, 99, 101, 56, 130, 78, 175, 12, 220, 65, 110, 33, 180, 90, 140];
// let NumOfComparisons = 0;
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {

//     NumOfComparisons++;
//     if (numbers[i] > 100)
//     {
//         newNumbers.unshift(numbers[i]);
//     }
// }

// console.log(newNumbers);

//  exercise 7
// const numbersOE = {
//     even : 0,
//     odd : 0,
//     divisibleTwoThree : 0
// }

// for (let i = 1; i < 50; i++)
// {


//     if (i % 2 == 0 && i % 3 == 0) {numbersOE.divisibleTwoThree += 1;}
    
//     else if (i % 2 == 0) {numbersOE.even += 1;}

//     else {numbersOE.odd += 1;}
// }

// console.log(numbersOE);

// exercise 8
// exercise 9
// exercise 10



// // exercise 11 - לא סיימתי

// const mixedKeysObject = {
//   A: true,
//   b: 123,
//   C: "Hello",
//   d: [1, 2, 3],
//   E: null,
//   f: { key: "value" },
//   G: false,
//   h: 3.14,
//   I: "JavaScript",
//   j: undefined
// };


// const newObject = {};
// const temp = [];

// const mixedKeysObjectkeys = Object.keys(mixedKeysObject);

// for (let i = 0)


//  exercise 12

// let asterisk = "*";

// for (let i = 0; i < 3; i++)
// {
//     console.log(asterisk);
//     asterisk += " *";
    
// }

//  exercise 13

// const array1 = [1, 5, 8, 12, 20, 25, 30, 33, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100];
// const array2 = [3, 5, 9, 12, 18, 25, 27, 30, 39, 45, 51, 55, 63, 65, 72, 75, 84, 90, 95, 100];

// let array3 = [];

// for (let i = 0; i < array1.length; i++)
// {
//     if (array2.includes(array1[i]) && !array3.includes(array1[i]))
//     {
//         array3.push(array1[i]);
//     }
// }

// console.log(array3);
