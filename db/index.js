const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qqfeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log("connect to mongoose");
})
.catch((error) => {
    console.error("connection error: " + error.message)
});

const db = mongoose.connection;
module.exports = db;