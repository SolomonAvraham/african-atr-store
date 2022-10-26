import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Contact() {
  const [inputValue, setInputValue] = useState("");

  const sendButton = () => {
    if (inputValue) {
      setInputValue(" ");
    }
    return setInputValue(` Sent successfully! Thanks.`);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center text-center   ">
        <h1 class="container text-bg-dark mb-3 mt-5 display-5">Contact us</h1>
        <div className="text-center  ">
          <span className="fs-5">
            ★ {"  "} Here you can upload your files:{" "}
          </span>
          <input accept=".pdf,.jpg,.jpeg,.gif" type="file" />
        </div>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-4"
          name="comments"
          rows="12"
          cols="35"
        ></textarea>

        <button
          onClick={sendButton}
          className="mb-5 mt-5 text-center bg-dark text-light w-25"
        >
          SEND
        </button>
      </div>

      <Row className="mb-5 mt-5 ">
        <Col>
          <img
            className="img-responsive mb-4 mt-5 rounded mx-auto d-block  "
            src="/imgs/logo.png"
            alt="logo"
            style={{ width: "5rem", opacity: "0.1" }}
          />
        </Col>
      </Row>
    </>
  );
}
