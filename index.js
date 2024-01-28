const mongoose = require('mongoose');
const express = require("express");
var cors = require('cors')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;
var jwt = require('jsonwebtoken');
const itemsRoute = require("./src/app/modules/items/items.route")
const soldItemsRoute = require("./src/app/modules/SoldItems/SoldItemsRoute")


// middleware
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:5173/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

async function main() {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ejazoj4.mongodb.net/redux-assignment?retryWrites=true&w=majority`;
  await mongoose.connect(uri);
  console.log("db connected");
}

main();

// Routes
app.use("/items", itemsRoute)
app.use("/soldItems", soldItemsRoute)

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