const express = require("express");
const app = express();
require("dotenv").config();
const appRouter = require("./routes/appRouter")
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDb  = require("./config/db");

app.use(cors())

app.use(bodyParser.json())
app.use("/api/v1/",appRouter)

connectDb()
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}!`)
);