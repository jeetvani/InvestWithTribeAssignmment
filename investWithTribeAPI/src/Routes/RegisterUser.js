const connection = require("../Database/connection");
const uniqid = require("uniqid");
const { Router } = require("express");
const router = Router();
const { pool } = connection;

const RegisterUser = router.post("/registerUser", (req, res) => {
  const { Name, PAN, Address, email } = req.body;
  const Id = uniqid();
  const query = `INSERT INTO User (Id,Name,PAN,Address,Email) VALUES ('${Id}','${Name}','${PAN}','${Address}','${email}')`;
  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error checking user exist:", err);
      return;
    }
    if (result) {
      res.send({
        status: 200,
        message: "User Registered Successfully",
        Id: Id,
      });
    }
  });
});

module.exports = { RegisterUser };
