console.log(process.argv);

const names = process.argv.slice(2);

console.log(names);

for (let name of names) {
    console.log(`Hello : ${name}`);
}