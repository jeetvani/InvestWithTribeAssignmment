const { Router } = require("express");
const { pool } = require("../Database/connection");
const router = Router();

const CheckUserExist = router.post("/checkUserExist", (req, res) => {
  const { email } = req.body;
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error checking user exist:", err);
      return;
    }
    if (result.length > 0) {
      res.send({ userExist: true,userData:result[0] });
    } else {
      res.send({ userExist: false });
    }
  });
});

module.exports = { CheckUserExist };
