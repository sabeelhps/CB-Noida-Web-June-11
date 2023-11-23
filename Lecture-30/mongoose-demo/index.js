const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
    .then(() => {
        console.log('connecton open!');
    })
    .catch((err) => {
        console.log(err);
    });


const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        trim: true,
        required: true,
        unique: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    year: Number,
    isWatched: Boolean
},{versionKey: false, timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);

// const superman = new Movie(
//     {
//         name: 'Superman',
//         year: 2015,
//         rating: 7,
//         isWatched: false
//     });

// // console.log(ironman);

// superman.save()
//     .then((m) => console.log(m));


// Movie.insertMany([
//     {
//         name: 'Batman',
//         year: 2019,
//         isWatched: false,
//         rating: 8
//     },
//     {
//         name: 'Avatar',
//         year: 2015,
//         isWatched: true,
//         rating: 7.8
//     },
// ])
//     .then((m) => console.log(m));

// Movie.create({ name: 'Dark Knight', year: 2016, rating: 8.9, isWatched: false })
//     .then((m) => console.log(m))



// Movie.findByIdAndUpdate('65478d137ecae97e052abf1b', {rating: 6.5, year: 2023},{new: true}).then(m=>console.log(m))