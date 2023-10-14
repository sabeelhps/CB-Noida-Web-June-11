const fsPromises = require('fs/promises');
const path = require('path');

const FILE_1 =  path.join(__dirname, 'data', 'file1.txt')
const FILE_2 =  path.join(__dirname, 'data', 'file2.txt')
const RESULT_FILE =  path.join(__dirname, 'data', 'result.txt')

async function main() {
    // Reading the file as a string
    const data1 = await fsPromises.readFile(FILE_1, { encoding: 'utf-8' });    
    const data2 = await fsPromises.readFile(FILE_2, { encoding: 'utf-8' });  
        
    // Get all the numbers from the file in an array
    const arr1 = data1.split('\n');
    const arr2 = data2.split('\n');

    // Merge both arrays

    const res = arr1.concat(arr2);

    // Perform Sorting
    res.sort((a, b) => a - b);

    // Write back the result to the result.txt file.
    const resultData = res.join('\n');
    await fsPromises.writeFile(RESULT_FILE, resultData, { encoding: 'utf-8' });
    
    console.log('Written Successfully');
}

main();