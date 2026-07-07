const express = require("express");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Student Management API");
});

// Student List
app.get("/students", (req, res) => {

    const students = [
        {
            id: 1,
            name: "Rahul"
        },
        {
            id: 2,
            name: "Priya"
        }
    ];

    res.json(students);

});

// Add Student
app.post("/students", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Student Added Successfully"
    });

});

app.listen(3000, () => {
    console.log("Server Running...");
});