import axios from "axios";
const url = "http://localhost:8000";

export const uploadFile = async (post) => {
  // console.log(post);
  try {
    return await axios.post(`${url}/file/upload`, post);
  } catch (error) {
    console.log("Error while calling uploadFile API ", error);
  }
};
export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API ", error);
  }
};
export const getAllPosts = async (param) => {
  try {
    let res = await axios.get(`${url}/allposts${param}`);
    return res.data;
  } catch (err) {
    console.log("Error while calling getAllPosts API", err);
  }
};
export const getPost = async (id) => {
  try {
    let res = await axios.get(`${url}/post/${id}`);
    return res.data;
  } catch (err) {
    console.log("Error while calling getPost API", err);
  }
};
export const editPost = async (id, post) => {
  try {
    let res = await axios.post(`${url}/edit/${id}`, post);
  } catch (err) {
    console.log("Error while calling editPost API", err);
  }
};
export const deletePost = async (id) => {
  try {
    let res = await axios.delete(`${url}/delete/${id}`);
  } catch (err) {
    console.log("Error while calling editPost API", err);
  }
};
//////////////////////////////////////////

export const registerUser = async (user) => {
  try {
    return await axios.post(`${url}/register`, user);
  } catch (err) {
    return err;
  }
};

export const loginUser = async (user) => {
  try {
    return await axios.post(`${url}/login`, user, { withCredentials: true });
  } catch (err) {
    console.log(err);
    return err;
  }
};
//////////////////////////////////////////////////////////////////////////////
export const showhome = async () => {
  try {
    const data = await axios.get(`${url}/`, { withCredentials: true });

    return data;
  } catch (err) {
    return err;
  }
};

export const checkDetail = async (id) => {
  try {
    return await axios.get(`${url}/detailcheck/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    return err;
  }
};
///////////////////////////////////////////////////////////////////////////////

export const getUser = async () => {
  try {
    return await axios.get(`${url}/getUser`, { withCredentials: true });
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {
    return await axios.get(`${url}/logout`, { withCredentials: true });
  } catch (err) {
    return err;
  }
};
