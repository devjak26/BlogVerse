import "bootstrap/dist/css/bootstrap.min.css";

import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="container1">
        <h1>Contact Us!</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/devendrakumar63d@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block fa-lg gradient-custom-3"
          >
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
