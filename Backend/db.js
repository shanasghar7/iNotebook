const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shan:123@nodeapi.awvrq.mongodb.net/nodeapi?retryWrites=true&w=majority";
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected Successfully");
    });
}

module.exports = connectToMongo;