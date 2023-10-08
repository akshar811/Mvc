const check = (req, res , next) => {
  let { username, password , email , number } = req.body
  if(username && password && email && number){
    next();
  }
  else{
    res.status(400).json({ message: "All fields are required" });
  }
}

module.exports = check;
