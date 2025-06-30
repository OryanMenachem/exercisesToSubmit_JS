//  exercise 1

import fs from 'fs';


fs.readFile('./file.txt', 'utf-8', (err, data) => { 
    
    if (err) {console.log('error: ', err); return;}
    console.log(data);
    console.log(`length:`, data.length);
})

fs.stat('./file.txt', (err, data) => { 
    
    if (err) {console.error('error: ', err); return;}
    console.log(`birthtime:`, data.birthtime.toDateString());
    console.log(`byte:` ,data.size);
    
    
})


