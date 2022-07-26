import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { checkDetail, deletePost, getPost } from "../../service/api";
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
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: 5,
    borderRadius: 8,
    width: 50,
    fontSize: 30,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  hidden: {
    display: "none",
  },
}));
const DetailView = ({}) => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [isAuthor, setAuth] = useState(0);
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(id);
      setPost(data);
    };
    fetchData();

    const check = async () => {
      const res = await checkDetail(id);
      console.log(res.data);
      if (res.data === "same") setAuth(1);
    };

    check();
  }, []);
  const history = useHistory();
  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };
  return (
    <Box className={classes.container}>
      <img
        className={classes.image}
        src={post.picture || url}
        alt="bannerpic"
      />

      <Box className={isAuthor !== 1 ? classes.hidden : classes.icons}>
        <Link to={`/edit/${post._id}`}>
          {" "}
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete
          className={classes.icon}
          color="error"
          onClick={() => deleteBlog()}
        />
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.link}>
          <Typography>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createDate).toDateString()}
        </Typography>
      </Box>

      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailView;
