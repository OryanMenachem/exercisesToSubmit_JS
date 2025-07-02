import { error } from 'node:console';
import * as fsp from 'node:fs/promises';
import { promises } from 'node:stream';
import fs from 'fs';
// import path from 'node:path';





// EXERCISE 1

// function readFilePromise(path) 
// {
//     return fsp.readFile(path, 'utf8')

//     .then((data) => data)

//     .catch((err) => err)
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

// async function getFileSize(path) {

//     try {

//     const size = ((await fsp.stat(path)).size)

//     if (!size) { throw new Error('error'); }

//     return size;
    
//     }

//     catch (error) { return error.message }
   
    
// }

// const p1 = await getFileSize('./file.txt')
// console.log(p1);



// EXERCISE 4

// async function listFiles(dir) {

//     try {

//         const fileList = await fsp.readdir(dir)

//         if (!fileList) {throw new Error('error'); }

//         return fileList;

//     }
//     catch (error) {return error.message}
// }

// const path = "C:/Users/om316/OneDrive/Desktop/exercises";
// const p1 = await listFiles(path);
// console.log(p1);




// EXERCISE 5

// EXERCISE 6

// EXERCISE 7