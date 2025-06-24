// exercise 1

const doubleValues = (numArr) => {return numArr.map((num) => {return num*2})};

// TEST 

console.log(`\nEXERCISE 1 TEST: doubleValues([2,3,4]) => \n`)
console.log(doubleValues([2,3,4]),"\n");  


// exercise 2

const onlyEvenValues = (arr) => {return arr.filter((num) => {return num % 2 == 0})};

// TEST 

console.log(`EXERCISE 2 TEST: onlyEvenValues([1,2,3,4,5,6]) => \n`)
console.log(onlyEvenValues([1,2,3,4,5,6]), "\n"); 





//  exercise 

function showFirstAndLast(arr) 
{
    const firstAndLastArr = arr.filter((value) => {return typeof value === "string"});
    firstAndLastArr.splice(1,firstAndLastArr.length -2);
    return  firstAndLastArr;
}

// TEST 

console.log(`EXERCISE 3 TEST: showFirstAndLast(["Hello",1,"world",null,"Moon"] => \n`)
console.log(showFirstAndLast(["Hello",1,"world",null,"Moon"]), "\n");  





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

// TEST 

console.log(`EXERCISE 4 TEST: vowelCount("Hello Moon") => \n`)
console.log(vowelCount("Hello Moon"), "\n"); 




// exercise 5

capitalize = (str) => {return str.toUpperCase()} ;

// TEST 

console.log(`EXERCISE 5 TEST: capitalize("hello") => \n`)
console.log(capitalize("hello"), "\n"); 



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

// TEST 

console.log(`EXERCISE 6 TEST: shiftLetters("Zab") => \n`)
console.log(shiftLetters("Zab"), "\n");  




//  exercise 7

const swapCase = (str) => {return str.split(" ").filter((word,i) => {return i % 2 == 1} ).map((str) => {return capitalize(str)});}

// TEST 

console.log(`EXERCISE 7 TEST: swapCase("hello moon hey ther") => \n`)
console.log(swapCase("hello moon hey ther"));  







