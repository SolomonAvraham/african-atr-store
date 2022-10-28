import storeItems from "../../../services/items.json";
import { Col, Row, Container } from "react-bootstrap";
import StoreItems from "../StoreItems/StoreItems";

export default function Store() {
  return (
    <Container
      className="d-sm-flex bg-light   mt-1 text-center w-100 d-md-flex flex-column align-items-center "
      id="#up"
    >
      <h1
        style={{ letterSpacing: ".33rem", fontWeight: "bolder" }}
        className="mt-4 display-4 storeHeader "
      >
        Pick One of Our Arts...
      </h1>
      <h5
        className="storeSecHeader"
        style={{
          letterSpacing: ".53rem",
          borderBottom: "0.1px dashed black",
        }}
      >
        ...and helps support our community and expand our talent globally.
      </h5>

      <Row xs={1} md={2} lg={4} className="g-3 mb-5 mt-5 ">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
      <Row className="mb-5 mt-5 ">
        <Col>
          <img
            className="img-responsive  mt-5   mx-auto    "
            src="/imgs/logo.png"
            alt="logo"
            style={{ width: "5rem", opacity: "0.1" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
