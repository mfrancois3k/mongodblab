const db = require("../db");
const Employee = require("../models/employee");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    const employees = [
        {
         first_name : "bruno",
         last_name: "Galvao",
         email: "bruno.galvao@ga.co",
         job_title: "Software Engineering Instructor",
         address: {
            street: "10 E 21St St",
            city: "New York",
            state: "Ny",
            zip: "10010"
         },
        },
        {
            first_name : "bruno",
            last_name: "steff",
            email: "dummy@gmail.com",
            job_title: "fake software engineer",
            address: {
               street: "999 east 32st",
               city: "brooklyn",
               state: "Ny",
               zip: "10010"
            },
        },
        {
            first_name : "bruno",
            last_name: "steff",
            email: "dummy@gmail.com",
            job_title: "fake software engineer",
            address: {
               street: "999 east 32st",
               city: "brooklyn",
               state: "Ny",
               zip: "10010"
            },
        }
    ];
    await Employee.insertMany(employees)
    console.log("Created employees!");

};

const run = async () => {
    await main();
    db.close();
  };
  run();
