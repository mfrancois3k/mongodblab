
const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
})

const Employee = new Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email: {type: String, required: true},
        job_title: {type: String, required: true},
        address: addressSchema,
    }
    )

    module.exports =  mongoose.model("employee", Employee);