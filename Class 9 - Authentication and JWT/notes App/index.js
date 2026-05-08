// notes apps that (ONLY ONE USER)
// 1. creats a note - POST
// 2. Get a not - GET

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

const { authMiddleware } = require("./middleware";)
app.use(express.json());

const path = require("path"); // defining the path is necessary to run the path.join

const notes = []; // array to store notes...then in future we store in databases in future
const users = [];

// Post the data to DB or array in this case


// Behaves as a Authenticated endpoint - verifies which user it is and displays his content.
app.post("/notes",authMiddleware, function (req, res) {
  // after signin check if the user has sent the right header - extract from header who is user

//   const token = req.headers.token;
//   if (!token) {
//     res.status(403).send({
//       message: "You are not logged in",
//     });
//     return;
//   }
//   // Verify JWT token using secret key and extract user data from it by converting the token back to username
//   const decoded = jwt.verify(token, "faheem123");
//   const username1 = decoded.username;

//   if (!username1) {
//     res.status(403).json({
//       message: "Not Correct Token",
//     });
//     return;
//   }

  const note = req.body.notes; // notes is the key (varible) send by html in its body as we'll keep it as note there
  notes.push({
    note: note,
    username: username1,
  });
  res.send({
    message: "Done",
  });
});

// send the data to FE
// Behaves as a Authenticated endpoint
app.get("/notes",authMiddleware, function (req, res) {
  // after signin check if the user has sent the right header - extract from header who is user
//   const token = req.headers.token;

//   if (!token) {
//     res.status(403).send({
//       message: "You are not logged in",
//     });
//     return;
//   }

//   // Verify JWT token using secret key and extract user data from it by converting the token back to username
//   const decoded = jwt.verify(token, "faheem123");
//   const username1 = decoded.username;

//   if (!username1) {
//     res.status(403).json({
//       message: "Not Correct Token",
//     });
//     return;
//   }


  // Return the note of this specific user (userNotes)
  const userNotes = notes.filter((note) => note.username === username1);
  res.json({
    notes: userNotes,
  });
});

// servers FE home
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html")); //__dirname always means: “the folder where your server file is running”
});

// Authentication using JWT

// SIGN UP
app.post("/signup", function (req, res) {
  const username1 = req.body.username;
  const password1 = req.body.password;

  const userExists = users.find((user) => user.username === username1); // prevent duplicate usernames
  if (userExists) {
    return res.status(403).json({
      message: "User with this username eists",
    });
  }

  users.push({
    username: username1,
    password: password1,
  });

  res.json({
    message: "Done Welcome",
  });
});

// SIGN IN
app.post("/signin", function (req, res) {
  const username1 = req.body.username;
  const password1 = req.body.password;

  const userExists = users.find(
    (user) => user.username === username1 && user.password === password1,
  );
  if (!userExists) {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }

  // Create JWT tokens
  const token = jwt.sign(
    {
      // here we ar converting the username to token
      username: username1,
    },
    "faheem123",
  ); //faheem123 is a secretkey  - Backend uses this secret to “lock/sign” the token. users never know this secret , stays in Backend
  res.json({
    token: token,
  });
});

// Serve signin and Signup pages
app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "signup.html")); 
});

app.get("/signin", function (req, res) {
  res.sendFile(path.join(__dirname, "signin.html")); 
});
app.listen(3000);
