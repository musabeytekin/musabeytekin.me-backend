const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const db = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(()=> {
        console.log("MongoDB Connection Successfull");
    }).catch(err => {
        console.log(err);
    });
};
module.exports = db;