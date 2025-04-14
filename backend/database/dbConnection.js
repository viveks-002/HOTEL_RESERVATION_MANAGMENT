import mongoose, { connect } from "mongoose";

export const dbConnection = () => {
  console.log("Connecting to database...");
  console.log(process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
