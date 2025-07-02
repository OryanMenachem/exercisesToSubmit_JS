import { error } from 'node:console';
import * as fsp from 'node:fs/promises';
import { promises } from 'node:stream';





// EXERCISE 1

function readFilePromise(path) 
{
    return fsp.readFile(path, 'utf8')

    .then((data) => data)

    .catch((err) => err)
}


const p1 = readFilePromise('./file.txt')

p1.then((data) => console.log(data))




// EXERCISE 2

// async function readFileAsync(path) {

//     try {

//         const data = await fsp.readFile(path, 'utf-8')

//         if (!data) { throw new Error('error'); }

//         return data;
//     }

//     catch (error) { return error.message }


// }


// const p1 = await readFileAsync('./file.txt')

// console.log(p1);




// EXERCISE 3

async function getFileSize(path) {

    const size = await fsp.stat(path,)
}









// EXERCISE 4