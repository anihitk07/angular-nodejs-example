const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = process.env.PORT || 8080;
testkey = process.env.TESTKEY;

const users = [];

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/my-app/dist/angular-nodejs-example/"));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, testkey, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd" + testkey);
});

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/my-app/dist/angular-nodejs-example/index.html")
});

app.listen(port, testkey, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Server listening on the port:!!!::${port}`);
  console.log(testkey);
});
