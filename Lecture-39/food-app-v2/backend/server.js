const Database = require('./data-source');
const app = require('./app');

(async () => {
    try {
        await Database.connect();
        console.log('DB Connection Open');

        app.listen(8080, () => {
            console.log('server running at port :: 8080');
        })
    }
    catch (e) {
        console.log('could not start the server', e);
    }
})()
