//  Data massaging 

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


// // exercise 1:  two function for return list of names from - data 
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

// // TEST
// console.log(getNamesList(data));



// // exercise 2: two function for return all object that year of birthday < 1990

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

// // TEST
// console.log(getArrOfObjByBirthday(data));



// exercise 3: Three functions to return an object containing types of food and the number of times they appear in the data

function getFoodCount(array)
{
    const FoodObj = {};
    
    for (const food of array)
    {
        
        
        if (Object.hasOwn(FoodObj, food))
        {
            FoodObj[food] += 1;
        }
        else {  FoodObj[food] = 1 }
    }

    
    return FoodObj

}







function getFoodsArrayFromObj(obj) 
{
    const arrays = [];

    for (const key in obj)
    {
        if (key == "favoriteFoods")
        {
            for (const ke in obj[key])
            {
                arrays.push(obj[key][ke]);
            }
        } 
    }
    
    return arrays.reduce((acc,curr) =>  acc.concat(curr));
}
              
        
                
                
            
function getFoodObj(array)
{
    return getFoodCount( array.map((obj) => {return getFoodsArrayFromObj(obj)}).reduce((acc,curr) => acc.concat(curr)));
}

        
   




console.log(getFoodObj(data));


























