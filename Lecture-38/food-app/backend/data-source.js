const mongoose = require('mongoose');

class Database{
    static async connect() {
        try {
            await mongoose.connect('mongodb://127.0.0.1/food-app-june-23');
        }
        catch (e) {
            console.error(e);
            await mongoose.disconnect();
        }
    }
}

module.exports = Database;