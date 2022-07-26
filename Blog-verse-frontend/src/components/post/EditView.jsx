import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editPost, getPost, uploadFile } from "../../service/api";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
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
}));
const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "Blog villa",
  categories: "All",
  createDate: new Date(),
};

const EditView = () => {
  const classes = useStyles();

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { id } = useParams();
  const history = useHistory();

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
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(id);
      setPost(data);
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const saveBlog = async (e) => {
    e.preventDefault();

    const data = await editPost(id, post);
    history.push(`/detail/${id}`);
  };
  const url =
    post.picture ||
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="bannerpic" />

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
          className={classes.textField}
          onChange={(e) => handleChange(e)}
          placeholder="title"
          name="title"
          value={post.title}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => saveBlog(e)}
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        className={classes.textArea}
        rowsMin={5}
        name="description"
        value={post.description}
        onChange={(e) => handleChange(e)}
        placeholder="Tell your story ...."
      />
    </Box>
  );
};

export default EditView;
