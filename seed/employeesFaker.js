const { faker } = require('@faker-js/faker');
const db = require("../db");
const Employee = require("../models/employee");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
   
const employees = [...Array(100)].map(employee => (
    {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        job_title: faker.name.jobTitle(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode()
        }
    }
))

    await Employee.insertMany(employees)
    console.log("Created employeesFakers!");

};

const run = async () => {
    await main();
    db.close();
  };
  run();
