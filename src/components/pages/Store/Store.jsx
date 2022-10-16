import storeItems from "../../../services/items.json";
import { Col, Row } from "react-bootstrap";
import StoreItems from "../StoreItems/StoreItems";

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1}  md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </> 
  );
}
