const express = require("express");

const {json} = require("express");

const connect = require("./config/database");

connect();

const todoRoute = require("./router/todoRoutes")

const app = express();
app.use(json());
app.use('/todos', todoRoute);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})