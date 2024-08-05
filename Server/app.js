const express = require("express");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
//Connect DB
require("./db/connection");
//import files
const Users = require("./Models/users");
const Conversations = require("./Models/Conversations");

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
    if (!fullName || !email || !password) {
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

app.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please fill all required fields");
    } else {
      const user = await Users.findOne({ email });
      if (!user) {
        res.status(400).send("User email or password is incorrect");
      } else {
        const validateUser = await bcryptjs.compare(password, user.password);
        if (!validateUser) {
          res.status(400).send("User email or password is incorrect");
        } else {
          const payload = {
            userID: user.id,
            email: user.email,
          };
          const JWT_SECRETE_KEY =
            process.env.JWT_SECRETE_KEY || "THIS_IS_A_JWT_SECRETE_KEY";
          jsonwebtoken.sign(
            payload,
            JWT_SECRETE_KEY,
            { expiresIn: 84600 },
            async (err, token) => {
              await Users.updateOne({ _id: user._id }, { $set: { token } });
              user.save();
              next();
            }
          );
          return res.status(200).json({
            user: { email: user.email, fullName: user.fullName },
            token: user.token,
          });
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
});

app.post("/api/conversation", async (req, res) => {
  try {
    const { senderId, receiveId } = req.body;
    const newConversation = new Conversations({
      members: [senderId, receiveId],
    });
    await newConversation.save();
    res.status(200).json("Conversation Created Successfully");
  } catch (e) {
    console.log(e);
  }
});

app.get("/api/conversation/:userId", async (req, res) => {
  try {
    const userID = req.params.userId;
    const conversations = await Conversations.find({
      members: { $in: [userID] },
    });
    const conversationUserData = Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = await conversation.members.find(
          (member) => member !== userID
        );
        const user = await Users.findById(receiverId);
        return {
          user: { email: user.email, fullName: user.fullName },
          conversationId: conversation._id,
        };
      })
    );
    res.status(200).json(await conversationUserData);
  } catch (e) {
    console.log(e);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
