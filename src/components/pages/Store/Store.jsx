import storeItems from "../../../services/items.json";
import { Col, Row, Container } from "react-bootstrap";
import StoreItems from "../StoreItems/StoreItems";

export default function Store() {
  return (
    <Container
      className="d-sm-flex bg-light mb-5 mt-1 text-center w-100 d-md-flex flex-column align-items-center "
      style={{ minHeight: "80vh" }}
    >
      <h1>Store</h1>

      <Row xs={1} md={2} lg={4} className="g-3 mb-5 mt-2 ">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
