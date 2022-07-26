import Header from "./components/Header";
import "./App.css";
import Home from "./components/home/Home";
import { Box } from "@material-ui/core";
import { Route } from "react-router-dom";
import DetailView from "./components/post/DetailView";
import CreateBlog from "./components/post/CreateBlog";
import EditView from "./components/post/EditView";
import Register from "./components/reg-log/Register";
import Login from "./components/reg-log/Login";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Logout from "./components/reg-log/Logout";
function App() {
  return (
    <>
      <Box style={{ marginTop: "64px" }}>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Header />
          <DetailView />
        </Route>
        <Route path="/create">
          <Header />
          <CreateBlog />
        </Route>
        <Route path="/contact">
          <Header />
          <Contact />
        </Route>
        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/edit/:id">
          <EditView />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Box>
    </>
  );
}

export default App;
