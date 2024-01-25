const mongoose = require('mongoose');
const express = require("express");
var cors = require('cors')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;
var jwt = require('jsonwebtoken');
const itemsRoute = require("./src/app/modules/items/items.route")


// middleware
app.use(express.json());
app.use(cors())

async function main() {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ejazoj4.mongodb.net/redux-assignment?retryWrites=true&w=majority`;
  await mongoose.connect(uri);
  console.log("db connected");
}

main();

// Routes
app.use("/items", itemsRoute)


// jwt token route
app.post("/getToken", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.TOKEN, { expiresIn: '1d' })
  res.send({ token });
})

// testing...
app.get('/', (req, res) => {
  res.send('Hello World from redux assignment!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})