import { Box, makeStyles, Typography } from "@material-ui/core";
import Blog from "./Blog.png";
const useStyles = makeStyles({
  image: {
    background: `url(${Blog}) center/55% repeat-x  `,
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 60,
      color: "#ffffff",
    },
    "& :last-child": {
      fontSize: 30,
      color: "#ffffff",
    },
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography style={{ fontWeight: "700", fontFamily: "cursive" }}>
        BlogVerse
      </Typography>
      <Typography>Blogs</Typography>
    </Box>
  );
};

export default Banner;
