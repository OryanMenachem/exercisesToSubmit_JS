import { error } from 'node:console';
import * as fsp from 'node:fs/promises';
import { promises } from 'node:stream';
import fs from 'fs';
import { readFile } from 'node:fs';
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
// p1.forEach((element,i) => {console.log(`${i+1}. ${element}`);});




// EXERCISE 5

//  async function readFilesInOrder(files) {

//     const fileContents = {}

//     try {
        

//     for (let i = 0; i < files.length; i++) {
        
//         fileContents['file' + (i+1)] = await fsp.readFile(files[i], 'utf-8')
//     }
    
//     if (!fileContents) {throw new Error('error'); }
    
//     return fileContents;
    
//     }

    
//         catch (error) {return error}
    
//     }
    
    



// const fileList  = ['./file.txt','./file1.txt','./file2.txt'];

// const fileContents = await readFilesInOrder(fileList);



// for (const key in fileContents) {

//       console.log(`${key}: \n${fileContents[key]}\n`);
// }




// EXERCISE 6

//  async function readFilesParallel(files) {

//     try {

//         const fileContents = await Promise.all (files.map((file) => fsp.readFile(file, 'utf-8')))

//         if (!fileContents) {throw new Error('error')}

//         return fileContents;
//     }
//     catch (error) {return error}

//  }

 
// const fileList  = ['./file.txt','./file1.txt','./file2.txt'];

// const fileContents = await readFilesParallel(fileList);

// fileContents.forEach((element, i) => {console.log(`file${i + 1}: \n${element}\n`)});


// EXERCISE 7