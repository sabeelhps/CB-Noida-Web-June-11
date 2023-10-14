const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');


// console.log(__dirname);
// console.log(process.cwd());

const filePath1 = path.join(__dirname, 'demo.txt');
const filePath2 = path.join(__dirname, 'abc.txt');

// fs.readFile(filePath1, { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(typeof data)
//     console.log(data);
//     console.log(data.split('\n'));
// });

const data = `Hello we are wring something inside this file
127368
12367389
217689
2356789
237689
2357689
32589
238903`;

// fs.writeFile(filePath2, data, { encoding: 'utf-8' }, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Written successfully');
// })


async function main() {
    const result = await fsPromises.readFile(filePath1, {encoding:'utf-8'});
    console.log(result);
    await fsPromises.writeFile(filePath2, data, { encoding: 'utf-8' });
    console.log('Writtent successfully');
}
main();