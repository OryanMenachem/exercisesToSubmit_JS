import fs, { readdir } from 'fs';
import path from 'path';

//  exercise 1


fs.readFile('./file.txt', 'utf-8', (err, data) => { 
    
    if (err) {console.log('error: ', err); return;}
   
    fs.stat('./file.txt', (err, details) => { 
    
    if (err) {console.error('error: ', err); return;}
    
    console.log(data);
    console.log(`byte:` ,details.size);
    console.log(`birthtime:`, details.birthtime.toDateString());
   
})
   
})


