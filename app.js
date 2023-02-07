// Import Express Module
const express = require("express")
// Define Server Object
const app = express()

// Route for localhost:9090/
app.get("/", (req, res) => {
    res.send("hello")
})

// Listen for a PORT
app.listen(9090)

// Route for localhost:9090/users
// app.get("/users", (res, req) => {})
