// function debit() {
//     console.log("Starting debit transaction");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const txnId = `TXN${Math.floor(Math.random() * 10000000)}`;
//             resolve(txnId);
//         }, 2000);
//     })
// }

// function updateLedger() {
//     console.log(`Initiating ledger update`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const updatedEntryId = Math.floor(Math.random() * 10);
//             if (updatedEntryId < 5) {
//                 return reject(new Error('Update entry id is less than 5'));
//             }
//             return resolve(updatedEntryId);
//         }, 2000);
//     })
// }

// function notifyUser() {
//     console.log('Send notification for txn update');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const notificationId = Math.floor(Math.random() * 1000);
//             resolve(notificationId);
//         }, 1000);
//     })
// }

// console.log('Transaction started');

// debit()
//     .then(function (txnId) {
//         console.log('Transacton success with id', txnId);
//         return updateLedger();
//     })
//     .then(function (updatedEntryId) {
//         console.log('Ledger updated with id', updatedEntryId);
//         return notifyUser();
//     })
//     .then(function (notificationId) {
//         console.log('Notification sent to the user : ', notificationId);
//     })
//     .catch((err) => {
//         console.log('Something went wrong', err.message);
//     })
//     .finally(() => {
//         console.log('Everything done!');
//     })


// https://api.github.com/users/sabeelhps

// console.log('START');

// const response = fetch('https://api.github.com/users/sabeelhps');

// response
//     .then((val) => {
//         console.log(val);
//         return val.json();
//     })
//     .then((jsonData) => {
//         console.log(jsonData);
//     })

// console.log('END');

// Async - Await syntax

async function fun() {
    // if (true) {
    //     throw new Error('Something went wrong!');
    // }
    return 100;
}

// fun()
//     .then((val) => {
//         console.log('Inside resolve')
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Error : ', err.message);
//     })

// function connectToDB() {
//     return new Promise((resolve, reject) => {
//         resolve(true);
//     })
// }




// async function demo() {
//     console.log('Entry in demo function');
//     const val = await fun();
//     console.log('After fun function')
//     console.log(val);
//     console.log('starting to connect to db')
//     const isConnected = await connectToDB();
//     console.log('After db connection');
//     console.log('DB connected : ', isConnected);
// }

// demo();

// console.log('After demo 1')
// console.log('After demo 2')
// console.log('After demo 3')
// console.log('After demo 4')
// console.log('After demo 5')
// console.log('After demo 6')
// console.log('After demo 7')


async function main() {
    try {
        const res = await fetch('http://api.github.com/users/sabeelhps');
        const jsonData = await res.json();
        console.log('Resolved!');
        console.log(jsonData); 
        return 10;
    }
    catch (err) {
        console.log('Inside catch');
        console.log(err);
        console.log(err.message);
    }
}

main()