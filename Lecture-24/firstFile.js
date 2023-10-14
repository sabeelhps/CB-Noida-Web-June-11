console.log("Hello World!");

function sum(x, y) {
    return x + y;
}

console.log("Sum is ", sum(5, 6));

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is rejected by choice!"));
        }, 1000);
    })
}

async function main() {
    try {
        const res = await sendEmail();
        console.log(res);  
    }
    catch (e) {
        console.log(e);   
    }
}

main();