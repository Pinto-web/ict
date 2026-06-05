const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongodb successfully");
    } catch (err) {
        console.error("Error connecting to mongodb:", err);
        process.exit(1);
    }
};

module.exports = connectDb;