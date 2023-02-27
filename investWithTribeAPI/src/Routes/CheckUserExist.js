const connection = require("../src/Database/connection");
const { Router } = require("express");
const router = Router();

const CheckUserExist = router.post("/checkUserExist", (req, res) => {
  const { email } = req.body;
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error checking user exist:", err);
      return;
    }
    if (result.length > 0) {
      res.send({ userExist: true });
    } else {
      res.send({ userExist: false });
    }
  });
});

module.exports = { CheckUserExist };
