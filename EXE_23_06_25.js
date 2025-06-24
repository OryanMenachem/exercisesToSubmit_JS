// exercise 1

const doubleValues = (numArr) => {return numArr.map((num) => {return num*2})};

console.log(doubleValues([2,3,4]));  // test


// exercise 2

const onlyEvenValues = (arr) => {return arr.filter((num) => {return num % 2 == 0})};
  
console.log(onlyEvenValues([1,2,3,4,5,6])); // test





//  exercise 3

function showFirstAndLast(arr) 
{
    const firstAndLastArr = arr.filter((value) => {return typeof value === "string"});
    // firstAndLastArr.splice(1,firstAndLastArr.length -2);
    return  firstAndLastArr.splice(1,firstAndLastArr.length -2);
}

console.log(showFirstAndLast(["Hello",1,"world",null,"Moon"]));  // test





// exercise 4

function vowelCount(str) 
{
    const vowelObj = {}

    for (letter of str)
    {
    if (letter in vowelObj)
    {
        vowelObj[letter] += 1;
    }
    else if ("AEIOU".includes(letter.toUpperCase()))
    {
        vowelObj[letter] = 1;
    }
    }
   return vowelObj;


}


console.log(vowelCount("Hello Moon")); // test




// exercise 5

capitalize = (str) => {return str.toUpperCase()} ;

console.log(capitalize("hello")); // test


// exercise 6



function shiftLetters(str) 
{
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let newStr = "";
    
    for (const letter of str) 
    {

        if (letter == "z") {newStr += letters[0]}
        else if (letter == "Z") {newStr += letters[0].toUpperCase()}

        else if (letter == letter.toUpperCase()) 
        {
        newStr += letters[letters.indexOf(letter.toLowerCase())+1].toUpperCase();
        }
        else
        {
            newStr += letters[letters.indexOf(letter.toLowerCase())+1]
        }
    }
    return newStr;

}


console.log(shiftLetters("Zab"));  // test




//  exercise 7

const swapCase = (str) => {return str.split(" ").filter((word,i) => {return i % 2 == 1} ).map((str) => {return capitalize(str)});}

console.log(swapCase("hello moon hey ther"));  // test







