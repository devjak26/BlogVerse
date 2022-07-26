import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { showhome } from "../../service/api";
import { useHistory } from "react-router";

let history;
const callHome = async () => {
  try {
    const data = await showhome();

    if (!data || data.data === "Token not found") throw new Error("Error");
  } catch (err) {
    history.push("/login");
  }
};

const Home = () => {
  useEffect(() => {
    callHome();
  }, []);
  history = useHistory();
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
