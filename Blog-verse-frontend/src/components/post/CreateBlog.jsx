import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { createPost, getUser, uploadFile } from "../../service/api.js";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    flex: 1,
    margin: "0 30px",
  },
  textArea: {
    width: "100%",
    marginTop: 40,
    border: "none",
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
  category: {
    margin: 20,
    marginLeft: 0,
    fontSize: 16,
  },
  opthead: {
    marginRight: 20,
  },
}));

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "Blog villa",
  categories: "All",
  createDate: new Date(),
};

const CreateBlog = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const [post, setPost] = useState(initialValues);
  const url =
    post.picture ||
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const history = useHistory();
  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState("");

  const callUser = async () => {
    const user = await getUser();

    const obj = {
      _id: post._id,
      title: post.title,
      description: post.description,
      picture: post.picture,
      username: user.data,
      categories: post.categories,
      createDate: post.createDate,
    };
    setPost(obj);
  };
  useEffect(() => {
    callUser();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        post.picture = image.data;
        setImageURL(image.data);
      }
    };
    getImage();
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async (e) => {
    e.preventDefault();

    const data = await createPost(post);
    history.push("/");
  };
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="bannerpic" />
      <div className={classes.category}>
        <label for="category" className={classes.opthead}>
          Choose a Category
        </label>
        <select
          name="categories"
          id="category"
          onChange={(e) => handleChange(e)}
        >
          <option>All</option>
          <option>Movies</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Fashion</option>
          <option>Tech</option>
        </select>
      </div>
      <FormControl className={classes.form}>
        <label htmlFor="fileinput">
          <AddCircle fontSize="large" color="action" />
        </label>
        <input
          type="file"
          id="fileinput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          onChange={(e) => handleChange(e)}
          className={classes.textField}
          placeholder="title"
          name="title"
        />
        <Button
          onClick={(e) => savePost(e)}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
      </FormControl>
      <TextareaAutosize
        onChange={(e) => handleChange(e)}
        className={classes.textArea}
        minRows={5}
        placeholder="Tell your story ...."
        name="description"
      />
    </Box>
  );
};

export default CreateBlog;
