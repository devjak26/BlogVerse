import Post from "../schema/post_schema.js";

export const createPost = async (req, res) => {
  try {
    const postdoc = await new Post(req.body);
    const post = await postdoc.save();
    res.status(200).json("Blog Saved");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllPosts = async (req, res) => {
  let username = req.query.username;
  let category = req.query.category;
  let posts;
  try {
    if (username) posts = await Post.find({ username: username });
    else if (category) posts = await Post.find({ categories: category });
    else posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getPost = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editPost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json("Blog updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    await data.delete();
  } catch (err) {
    res.status(500).json(err);
  }
};

//////////////////////////////////////
export const showhome = async (req, res) => {
  res.status(200).send(req.rootUser);
};

export const checkDetail = async (req, res) => {
  res.status(200).json("same");
};
