import storeItems from "../../../services/items.json";
import { Col, Row, Container } from "react-bootstrap";
import StoreItems from "../StoreItems/StoreItems";


export default function Store() {
  return (
    <Container
      className="d-sm-flex bg-light mb-5 mt-1 text-center w-100 d-md-flex flex-column align-items-center "
      style={{ minHeight: "80vh" }}
    >
      <div id="#top"></div>
      <h1
        style={{ letterSpacing: "11px", fontWeight: "bolder" }}
        className="mt-4 "
      >
        Pick One of Our Arts...
      </h1>
      <h5 style={{ letterSpacing: "6px", borderBottom: "0.1px dashed black" }}>
        ...and helps support our community and expand our talent globally.
      </h5>

      <Row xs={1} md={2} lg={4} className="g-3 mb-5 mt-2 ">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
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
    </Container>
  );
}
