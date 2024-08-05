const mongoose = require("mongoose");

const url =
  "mongodb+srv://ubaidullah1234shahid:Ubaid1234@cluster0.fcdkjdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting", err);
  });