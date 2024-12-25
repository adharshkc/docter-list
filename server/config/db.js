
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const dbUrl = process.env.DATABASE_URL;
const connectDb = async () => {
  // console.log(dbUrl)
  try {
    if (dbUrl) {
      const connect = await mongoose.connect(dbUrl);
      
      console.log("connected to database");
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;