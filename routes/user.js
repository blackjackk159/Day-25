const bcrypt = require("bcrypt")
const User = require("../models/user")
const router = require("express").Router();
const handleErrorAsync = require("../utils/handleErrorAsync");

router.post('/sign_up', handleErrorAsync(async(req, res, next) =>{
  let { email, password, confirmPassword, name } = req.body;
 
  // 加密密碼
  password = await bcrypt.hash(password,12);
  const newUser = await User.create({
    email,
    password,
    name
  });
  res.status(200).json({
    status: 'success',
    data: newUser
  });
}))

module.exports = router