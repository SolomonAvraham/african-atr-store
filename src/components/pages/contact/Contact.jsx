import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5">
      <h1>Contact us</h1>
      <form action="mailto:selmon561@gmail.com" method="get" enctype="text/plain">
        <div>
          <br />
          <textarea name="comments" rows="12" cols="35">
            Write us down...
          </textarea>
        </div>
        <div>
          <input type="submit" name="submit" value="Send" />
          <input type="reset" name="reset" value="Clear Form" />
        </div>
      </form>
      <Row className="mb-5 mt-5 ">
        <Col>
          <img
            className="img-responsive mb-4 mt-5 rounded mx-auto d-block  "
            src="/imgs/logo.png"
            alt="logo"
            style={{ width: "5rem" }}
          />
        </Col>
      </Row>
    </div>
  );
}
