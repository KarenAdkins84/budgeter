const mongoose = require('mongoose');

//connect

const dbConnect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://fnk8476:pOeNpRZ86uP6UzD6@mern-money-tracker.2wnc0hn.mongodb.net/?retryWrites=true&w=majority'
        );
        console.log('DB connected successfully');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

dbConnect();