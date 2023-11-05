db.movies.find({
    $and: [
        { rating: { $gte: 8.5 } },
        { year: { $gte: 2015 } }
    ]
});

db.movies.find({
    $or: [
        { rating: { $gte: 8.5 } },
        { year: { $gte: 2015 } }
    ]
});
