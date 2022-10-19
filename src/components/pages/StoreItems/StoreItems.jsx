import { Card, Button,Row,Col } from "react-bootstrap";
import formatCurrency from "../../../utilities/formatCurrency";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";

export default function StoreItems({ id, name, price, imgUrl,artistName }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShopingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="d-flex flex-column  justify-content-between align-items-center mb-4">
            <Row>
              <Col className=" fs-6 bg-dark text-light   ">
                <span className="text-warning  ">Artist Name:</span>{" "}
                {artistName}
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="text-warning fs-4 ">Art Name:</span>{" "}
                <span className=" fs-5 fw-bold ">{name}</span>
              </Col>
            </Row>
            <Row>
              <Col className=" fs-4 fw-bold ">
                <span className="text-warning fs-4 ">Price:</span>{" "}
                <span className=" fs-4 fw-bold "> {formatCurrency(price)}</span>
              </Col>
            </Row>
            {/* <span className="fs-1">
              {name} <span className="fs-2">{artistName}</span>
              <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </span> */}
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(id)}
              >
                + ADD TO CARD
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className=" d-flex align-items-center jusify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  <span className="fs-3">{quantity} </span>
                  in cart
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
