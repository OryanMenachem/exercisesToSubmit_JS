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




// exercise extra

const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
]; 

  
// function getName(obj)
// {

//     for (const key in obj) 
//     {
//         if (key == "name") {return obj[key]}
//     }
    
// }

// function getNamesList(array)
// {
//     return array.map((obj) => {return getName(obj)})
// }

// function before1990(obj)
// {
//     for (const key in obj) 
//     {
//         if (key == "birthday") 
//         {
//             if (obj[key].slice(obj[key].length - 4) < 1990 ) {return obj}
//         }
//     }
// }


// function getArrOfObjByBirthday(array)
// {
//     return array.map((obj) => {return before1990(obj)}).filter((ele) => {return ele != undefined} )
// }

// console.log(getArrOfObjByBirthday(data));




function getFood(obj)
{
    const favoriteFoodsObj = {};

    for (let key in obj) 
    {
        if (key == "favoriteFoods") 
        {
            for (let ke in obj[key])
            {
                for (let food of ke)
                {
                    if (Object.hasOwn(favoriteFoodsObj,food))
                    {
                        favoriteFoodsObj[food] += 1;
                    }
                    else
                    {
                        favoriteFoodsObj[food] = 1;
                    }
                }
            }

            
        }
    }
    return favoriteFoodsObj

}

function getFoods(array)
{
    return array.map((obj) => {return getFood(obj)})
}

console.log(getFoods(data));


