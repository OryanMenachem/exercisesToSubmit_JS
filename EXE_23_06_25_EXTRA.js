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