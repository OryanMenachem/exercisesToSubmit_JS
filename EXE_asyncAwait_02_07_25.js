import { error } from 'node:console';
import * as fsp from 'node:fs/promises';
import { promises } from 'node:stream';
import fs from 'fs';




// EXERCISE 1

// function readFilePromise(path) {

//     return new Promise((resolve, reject) => {

//         fs.readFile(path, 'utf8', (err, data) => {

//             if (err) {reject(err)}

//             resolve(data);
//         })
     
        

//     })
// }


// const p1 = readFilePromise('./file.txt')

// p1.then((data) => console.log(data))



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
// EXERCISE 4