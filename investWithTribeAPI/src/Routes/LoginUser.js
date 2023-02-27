const connection = require("../Database/connection");

const { Router } = require("express");
const router = Router();
const { pool } = connection;


const LoginUser = router.post("/LoginUser", (req, res) => {
    const { Id } = req.body;
    const query = `SELECT * FROM User WHERE Id = '${Id}'`;
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
    }
);
});
    
module.exports = { LoginUser };