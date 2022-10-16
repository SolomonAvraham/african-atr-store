import { Card, Button } from "react-bootstrap";
import formatCurrency from "../../../utilities/formatCurrency";
import {useShopingCart} from "../../context/shoping-cart-context/ShopingCartContext"

export default function StoreItems({ id, name, price, imgUrl }) {
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
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
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
