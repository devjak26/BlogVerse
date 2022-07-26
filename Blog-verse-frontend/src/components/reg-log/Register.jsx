import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { registerUser } from "../../service/api";

const initial = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = () => {
  const [user, setUser] = useState(initial);
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const data = await registerUser(user);

    // console.log(data);

    if (data.status === 200) {
      if (data.data !== "User created") window.alert(data.data);
      else history.push("/login");
    } else window.alert("Error 500");
  };
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div
                  className="row justify-content-center"
                  style={{ backgroundColor: "#FCD2D1" }}
                >
                  <div
                    className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                    style={{ backgroundColor: "#FE8F8F" }}
                  >
                    <h1
                      className="mt-1 mb-5 pb-1"
                      style={{
                        fontFamily: "cursive",
                        fontWeight: "700",
                        color: "#DB3056",
                      }}
                    >
                      BlogVilla
                    </h1>
                    <h3
                      className="mt-1 mb-5 pb-1"
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      Sign Up
                    </h3>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="name"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-label" for="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-label" for="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            name="cpassword"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-label" for="form3Example4cd">
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-lg"
                          style={{ backgroundColor: "#EB4D55" }}
                          onClick={(e) => saveUser(e)}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
