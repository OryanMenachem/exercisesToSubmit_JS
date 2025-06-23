// exercise 1
// function doubleValues(numArr)
// {
//     const newArray1 = numArr.map((num) => {return num*2})
//     return newArray1
// }

// console.log(doubleValues([2,3,4]));

// exercise 2
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

function capitalize(str)
{
    return str.toUpperCase() 
}

// console.log(capitalize("hello"));


// exercise 6
// function shiftLetters() 
// {

// }

// console.log("b"-"a");



//  exercise 7

function swapCase(str) 
{
    const arr = str.split(" ")

    const secondUpper =  arr.filter((word,i) => {return i % 2 == 1} ).map((str) => {return capitalize(str)});
   
    // return  secondUpper.map((str) => {return capitalize(str)});
    return secondUpper;
   
}
console.log(swapCase("hello moon hye ther"));



