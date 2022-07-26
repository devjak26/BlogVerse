import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  component: {
    background: "#ffffff",
    color: "black",
  },
  container: {
    justifyContent: "center",
    columnGap: "5%",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  login: {
    display: "none",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link className={classes.link} to="/">
          <Typography>Home</Typography>
        </Link>
        <Link to="contact" className={classes.link}>
          {" "}
          <Typography>Contact</Typography>
        </Link>
        <Link to="/about" className={classes.link}>
          {" "}
          <Typography>About</Typography>
        </Link>
        <Link className={classes.link} to="/logout">
          <Typography>Logout</Typography>
        </Link>
        <Link to="/login" className={classes.link}>
          <Typography className={classes.login}>Login</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
