import { db } from "../connect.js"

export const register = (req, res) => {
  // check if user exists

  const q = "SELECT FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("user already exists!");
  });


  // create new user
  //  hash the password
}


export const login = (req, res) => {

}


export const logout = (req, res) => {

}
