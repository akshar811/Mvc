const { response } = require("express");
const user = require("../models/user.schema");
const nodemailer = require("nodemailer");


const users = async (req, res) => {
  let data = await user.find();
  res.send(data);
};

const createuser = async (req, res) => {
  let data = await user.create(req.body);
  res.send(data);
};

const updateuser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndUpdate(id, req.body);
  res.send(data);
};

// const updateuser = async (req, res) => {
//   try {
//     const data = await user.updateMany(
//       { username: "aksh" },
//       { $set: { username: "aksharaa" } }
//     );
//     res.send(data);
//   } catch (error) {
//     res.status(500).send("Server Error");
//   }
// };

const deleteuser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndDelete(id);
  res.send(data);
};

const signup = async (req, res) => {
  let { email } = req.body;
  let users = await user.findOne({ email: email });

  if (users) {
    res.send("Already exists");
  } else {
    let data = await user.create(req.body);
    res.send(data);
  }
};

const Ui = (req, res) => {
  res.render("index");
};
const charts = (req, res) => {
  res.render("charts");
};
const signups = (req, res) => {
  res.render("signups");
};
const logins = (req, res) => {
  res.render("login");
};

const login = async (req, res) => {
  // let { username, password } = req.body;
  // let data = await user.findOne({ username: username });
  // if (!data) {
  //   return res.send("user not found");
  // }
  // if (data.password != password) {
  //   return res.send("wrong password");
  // }
  // res.cookie("id", data.id).send("successfully login");

  res.send("logged in");
};

const signupcreate = async (req, res) => {
  let data = await user.create(req.body);
  res.cookie("id", data.id).send(data);
};

const profilepage = (req, res) => {
  res.render("profile", { user: req.user });
};

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err.message);
    }
  });
  res.send("success logout");
};

const reset = async (req, res) => {
  let { oldpassword, newpassword } = req.body;
  if (oldpassword == req.user.password) {
    await user.findByIdAndUpdate(req.user.id, { password: newpassword });
    res.send("success reset password");
  } else {
    res.send("wrong password");
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aksharambaliya6@gmail.com",
    pass: "rzxy eiqf jypf wvqt",
  },
});

let otp = Math.floor(Math.random() * 100000);

const otpsend = async (req, res) => {
   let {email} = req.body;

   let mailoptions = {
      from : "aksharambaliya6@gmail.com",
      to : email,
      subject : "otp",
      html : `<h1> OTP : ${otp}</h1>`
   }
   await transporter.sendMail(mailoptions , (err, info) => {
       if (err) {
        console.log(err);
       }
       else{
        console.log(info);
       }
   });
   res.send("sending otp");
};

const verify = async (req, res) => {
  let {cotp , password , email}= req.body;
  if(cotp==otp){
    let userdata = await user.findOne({email: email});
    if(userdata){
      userdata.password = password;
      await userdata.save();
      res.send(userdata);
    }
    else{
      res.send("user not found");
    }
  }
  else{
    res.send("Wrong otp");
  }
};

module.exports = { users, createuser, updateuser, deleteuser, Ui, signup , charts , signups ,logins , login , signupcreate , profilepage , logout , reset , otpsend  , verify};

