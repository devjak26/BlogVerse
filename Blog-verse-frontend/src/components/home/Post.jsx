import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: "center",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const shortstr = (str, lim) => {
  const len = str.length;

  let string = str;

  if (len > lim) string = str.substr(0, lim);
  return string;
};

const Post = ({ post }) => {
  const classes = useStyles();
  const url =
    post.picture ||
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={url} alt="postpic" />
      <Typography className={classes.text}>{post.categories}</Typography>
      <Typography className={classes.heading}>
        {shortstr(post.title, 20)}
      </Typography>
      <Typography className={classes.text}>{post.username}</Typography>
      <Typography>{shortstr(post.description, 80)}</Typography>
    </Box>
  );
};

export default Post;
