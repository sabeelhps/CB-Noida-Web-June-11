// Creating a promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 100);
        if (num < 50) {
            resolve(`Number less than 50 since num is : ${num}`);
        } else {
            reject(new Error(`Number is greater than or equal 50, since num is : ${num}`));
        }
    }, 2000);
});

// Consuming the created promise
p.then(function (msg) {
        console.log('Message inside resolve : ', msg);
    })
    .catch(function (err) {
        console.log('Message inside catch : ', err.message);
    })
    .finally(() => {
        console.log('Inside Finally');
    })

