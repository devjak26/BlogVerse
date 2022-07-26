import User from "../schema/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword)
      return res.status(200).json("Please fill the fields properly");
    const exist = await User.findOne({ email: email });
    if (exist) return res.status(200).json("Email already exists!");
    if (password !== cpassword)
      return res
        .status(200)
        .json("password and confirm password doesn't match!");
    const userdoc = await new User({ name, email, password, cpassword });
    await userdoc.save();
    res.status(200).json("User created");
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
export const userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(password);
    if (!email || !password) return res.status(422).json("Invalid credentials");
    const user = await User.findOne({ email: email });
    if (!user) return res.status(422).json("Invalid credentials");
    const token = await user.generateAuthToken();

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(422).json("Invalid credentials");
    return res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};
