import { Row, Col } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAuth } from "../../context/auth-context/AuthContext";

export default function Contact() {
  const { currentUser } = useAuth();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template ", form.current, "luLzakk9OdMNDVD6U")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="d-flex flex-column align-items-center text-center "
      >
        <span style={{ fontFamily: "Amatic SC" }} className="fs-5 mt-3 mb-3 ">
          ★ {"  "} Here you can upload your files:{" "}
          <input
            accept=".pdf,.jpg,.jpeg,.gif"
            type="file"
            style={{ fontFamily: "Amatic SC" }}
          />
        </span>
        <label>Message</label>
        <textarea
          name="message"
          style={{ width: "20rem", height: "10rem" }}
          className="  fs-5 mb-3 text-center "
        >
          {"Email: " + currentUser.email + "  , Message:  "}
        </textarea>{" "}
        <input type="submit" value="Send" className="bg-dark text-light" />
      </form>

      <Row className="mb-5 mt-5 ">
        <Col>
          <img
            className="img-responsive mb-4 mt-5 rounded mx-auto d-block  "
            src="imgs/logo.png"
            alt="logo"
            style={{ width: "5rem", opacity: "0.1" }}
          />
        </Col>
      </Row>
    </>
  );
}
