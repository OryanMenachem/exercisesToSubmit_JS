import fs, { readdir, readFile, stat } from 'fs';
// import path from 'path';

//  exercise 1


const f1Path = '../30_06_2025/f1';

const p1 = new Promise((resolve, reject) => {

    readFile('../30_06_2025/f1','utf-8', (err, data) => {

    if (err) {reject(err); return;}

    resolve(data)
    })


});


p1.then((content, f1Path) => {
    
    console.log(`content:`, content),

    stat('../30_06_2025/f1', (err, stats) => {

        if (err) {console.log(err); return;}

        console.log(`size:`, stats.size);
        console.log(`birthtime:`,stats.birthtime);

    })}


);
        
        






//  exercise 2

