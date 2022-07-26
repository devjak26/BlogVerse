import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAllPosts } from "../../service/api.js";
const Posts = () => {
  const [blog, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search);

      setPosts(data);
    };
    fetchData();
  }, [search]);
  return blog.map((post) => (
    <Grid item lg={3} xs={12} sm={4}>
      <Link
        to={`/detail/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Post post={post} />
      </Link>
    </Grid>
  ));
};
export default Posts;
