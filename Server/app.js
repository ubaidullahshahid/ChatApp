const express = require("express");
const bcryptjs = require("bcryptjs");
//Connect DB
require("./db/connection");
//import files
const Users = require("./Models/users");

//App uses
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/api/register", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    console.log("I am running: ", fullName, email, password);
    if ((!fullName, !email, !password)) {
      res.status(400).send("Please fill all required fields");
    } else {
      const isAlreadyExist = await Users.findOne({ email });
      if (isAlreadyExist) {
        res.status(400).send("User Already Exists");
      } else {
        const newUser = new Users({ fullName, email });
        bcryptjs.hash(password, 10, (err, hashedPassword) => {
          newUser.set("password", hashedPassword);
          newUser.save();
          next();
        });
        return res.status(200).send("User Registered Successfully");
      }
    }
  } catch (e) {}
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
