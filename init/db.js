import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// Import all our models
import "../models/Content";

export default function () {
  // Connect to our Database and handle any bad connections
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
  mongoose.connection.on("error", (err) => {
    console.error(`ERROR → ${err.message}`);
  });
}
