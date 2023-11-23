const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/user-relationship-demo')
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    addresses: [
        {
            _id: false,
            city: String,
            state: String,
            country: String,
            pincode: Number
        }
    ]
});

const User = mongoose.model('User', userSchema);

async function createUser(user) {
    const newUser = new User(user);
    await newUser.save();
    console.log('user created');
}

async function addUserAddress(userId, address) {
    const user = await User.findById(userId);
    user.addresses.push(address);
    await user.save();
    console.log('Address Addded Successfully');
}

const vivek = {
    name: 'Vivek',
    age: 25
}

// createUser(vivek);
const vivekAddressMumbai = {
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
    pincode: 25678238
}

const vivekAddressDelhi = {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    pincode: 110025
}


addUserAddress("6559faa3bfa52d0e8d49052e", vivekAddressDelhi);



