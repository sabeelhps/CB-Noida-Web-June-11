
function debit(debited) {
    console.log("Starting debit transaction");
    setTimeout(() => {
        const txnId = `TXN${Math.floor(Math.random() * 10000000)}`;
        debited(txnId);
    }, 2000);
}

function updateLedger(updated) {
    console.log(`Initiating ledger update`)
    setTimeout(() => {
        const updatedEntryId = Math.floor(Math.random()*1000);
        updated(updatedEntryId);
    }, 2000);
}

function notifyUser(notified) {
    console.log('Send notification for txn update');
    setTimeout(() => {
        const notificationId = Math.floor(Math.random() * 10000);
        notified(notificationId);
    }, 1000);
}

console.log('Transaction started');

debit(function (txnId) {
    console.log(`Transaction debit for txnId : ${txnId}`);
    updateLedger(function (updateId) {
        console.log('Ledger has been updated and the updateId is ', updateId);
        notifyUser(function (notificationId) {
            console.log('Notification send', notificationId);
            console.log('Transaction completed!');
        })
    })
})



