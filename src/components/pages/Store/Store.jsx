import storeItems from "../../../services/items.json";
import { Col, Row, Container } from "react-bootstrap";
import StoreItems from "../StoreItems/StoreItems";

export default function Store() {
  return (
    <Container className="text-center mt-1  ">
      <h1>Store</h1>

      <Row xs={1} md={2} lg={4} className="g-3 ">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
