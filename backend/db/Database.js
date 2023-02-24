const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`mongodb is connect with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase;