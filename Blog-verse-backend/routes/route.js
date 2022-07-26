import express, { Router } from "express";
import { createUser, userlogin } from "../controller/user-controller.js";
import {
  createPost,
  getAllPosts,
  getPost,
  editPost,
  deletePost,
  showhome,
  checkDetail,
} from "../controller/post-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
import {
  authenticate,
  checkUser,
  getUser,
} from "../controller/authentication.js";
const router = express.Router();

router.post("/create", createPost);
router.get("/allposts", getAllPosts);
router.get("/post/:id", getPost);
router.post("/edit/:id", editPost);
router.delete("/delete/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);
//////////////////////////////////

router.post("/register", createUser);
router.post("/login", userlogin);
////////////////////////////
router.get("/", authenticate, showhome);
router.get("/detailcheck/:id", checkUser, checkDetail);
//////////////////////////////
router.get("/getUser", getUser);
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken");
  res.status(200).json("Logout");
});
export default router;
