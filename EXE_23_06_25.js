// exercise 1

// const doubleValues = (numArr) => {return numArr.map((num) => {return num*2})}

// console.log(doubleValues([2,3,4]));

// // exercise 2
// function onlyEvenValues(arr) 
// {
//     const arrEven = arr.filter((num) => {return num % 2 == 0})
//     return arrEven;
// }


// console.log(onlyEvenValues([1,2,3,4,5,6]));

//  exercise 3
// function showFirstAndLast(arr) 
// {
//     const firstAndLastArr = arr.filter((value) => {return typeof value === "string"})
//     firstAndLastArr.splice(1,firstAndLastArr.length -2)
//     return firstAndLastArr;
// }
// console.log(showFirstAndLast(["Hello",1,"world",null]));





// exercise 4
// function vowelCount(str) 
// {
//     const vowelObj = {}
//     for (letter of str)
//     {
//     if (letter in vowelObj)
//     {
//         vowelObj[letter] += 1;
//     }
//     else if (["A","E","I","O","U"].includes(letter.toUpperCase()))
//     {
//         vowelObj[letter] = 1;
//     }
//     }
//    return vowelObj;


// }
// console.log(vowelCount("Hello Moon"));


// exercise 5

// function capitalize(str)
// {
//     return str.toUpperCase() 
// }

// console.log(capitalize("hello"));


// exercise 6

// const letters = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g',
//   'h', 'i', 'j', 'k', 'l', 'm', 'n',
//   'o', 'p', 'q', 'r', 's', 't', 'u',
//   'v', 'w', 'x', 'y', 'z'
// ];

// function shiftLetters(str) 
// {
//     let newStr = "";
    
//     for (const letter of str) 
//     {

//         if (letter == "z") {newStr += letters[0]}
//         else if (letter == "Z") {newStr += letters[0].toUpperCase()}

//         else if (letter == letter.toUpperCase()) 
//         {
//         newStr += letters[letters.indexOf(letter.toLowerCase())+1].toUpperCase();
//         }
//         else
//         {
//             newStr += letters[letters.indexOf(letter.toLowerCase())+1]
//         }
//     }
//     return newStr;

// }

// console.log(shiftLetters("ZzZ"));




//  exercise 7

// function swapCase(str) 
// {
//     const arr = str.split(" ")

//     const secondUpper =  arr.filter((word,i) => {return i % 2 == 1} ).map((str) => {return capitalize(str)});
   
//     // return  secondUpper.map((str) => {return capitalize(str)});
//     return secondUpper;
   
// }
// console.log(swapCase("hello moon hey ther"));







