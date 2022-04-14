const db = require("./db");

const Employee = require('./models/employee')

db.on("error", console.error.bind(console, "MongoDB connection error: "));

cconst db = require("./db");
const Employee = require("./models/employee");

db.on("error", console.error.bind(console, "MongoDB Has An Error: "));

const findAllEmployees = async () => {
  const employees = await Employee.find();
  console.log(
    "You have entered the Matrix: ", employees);
};

const createOneEmployee = async () => {
  const employee = await new Employee({
    first_name: "I'M",
    last_name: "GOD",
    email: "GODdontHaveEmails@gmail.com",
    job_title: "im am GOD",
    address: {
      street: "god St",
      city: "god Island",
      state: "god",
      zip: "too godly to type",
    },
  });
  await employee.save();
  console.log(
    "You have entered the Matrix :", employee);
};


const updateEmployee = async () => {
  const employee = await Employee.updateOne(
    { first_name: "Bruno" },
    { Last_name: "Mars" }
  );
  console.log(employee);
};

const deleteAnEmployee = async () => {
  const disappear = await Employee.deleteOne({ name: "Moe" });
  console.log("Eliminated a Employee");
};

const firstAndLast = async () => {
  const  all0 = await Employee.find(
    {},
    {
      email: 0,
      job_title: 0,
      address: 0,
      createdAt: 0,
      updatedAt: 0,
      _id: 0,
      __v: 0,
    }
  );
  console.log("",  all0);
};

const run = async () => {
  // await findAllEmployees();
  // await updateEmployee();
  // await deleteAnEmployee();
  // await firstAndLast();

  process.exit();
};

run();