import User from "../schema/userSchema.js";
import jwt from "jsonwebtoken";
import Post from "../schema/post_schema.js";
export const authenticate = async (req, res, next) => {
  try {
    let token = req.cookies.jwtoken;
    // console.log(token);
    if (!token) {
      return res.status(200).json("Token not found");
    }
    const verifyToken = jwt.verify(
      token,
      "mynameisdevendrakumarhereismysecretkey"
    );
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      return res.status(200).json("Token not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).json("unauthorised");
  }
};

export const checkUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(
      token,
      "mynameisdevendrakumarhereismysecretkey"
    );
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    const data = await Post.findById(req.params.id);

    if (rootUser.name !== data.username)
      return res.status(200).json("different");

    next();
  } catch (err) {
    return res.status(500).json("Server error", err);
  }
};

export const getUser = async (req, res) => {
  try {
    const token = req.cookies.jwtoken;

    const verifyToken = jwt.verify(
      token,
      "mynameisdevendrakumarhereismysecretkey"
    );

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    return res.status(200).json(rootUser.name);
  } catch (err) {
    return res.status(500).json(err);
  }
};
