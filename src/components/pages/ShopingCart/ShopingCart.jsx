import { Offcanvas, Col, Stack } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import formatCurrency from "../../../utilities/formatCurrency";
import storeItems from "../../../services/items.json";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export default function ShopingCart({ isOpen }) {
  const { closeCart, cartItems } = useShopingCart();
  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <MDBBtnGroup shadow="3">
              <MDBBtn color="success" onClick={() => setCheckOut(!checkOut)}>
                Buy Now {"     "}
                <ShoppingCartIcon />
              </MDBBtn>
            </MDBBtnGroup>

            {checkOut && (
              <form className="mb-5 mt-5">
                <MDBInput
                  className="mb-5"
                  label="Card number"
                  type="text"
                  size="lg"
                  defaultValue="1234 5678 9012 3457"
                />

                <MDBInput
                  className="mb-5"
                  label="Name on card"
                  type="text"
                  size="lg"
                  defaultValue="John Smith"
                />

                <MDBRow>
                  <MDBCol md="6" className="mb-5">
                    <MDBInput
                      className="mb-4"
                      label="Expiration"
                      type="text"
                      size="lg"
                      minLength="7"
                      maxLength="7"
                      defaultValue="01/25"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-5">
                    <MDBInput
                      className="mb-4"
                      label="Cvv"
                      type="text"
                      size="lg"
                      minLength="3"
                      maxLength="3"
                      placeholder="&#9679;&#9679;&#9679;"
                      defaultValue="&#9679;&#9679;&#9679;"
                    />
                  </MDBCol>
                </MDBRow>
                <div className="mb-5 d-flex justify-content-center">
                  <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                  <MDBIcon fab icon="cc-mastercard fa-2x text-dark pe-2" />
                </div>

                <MDBBtn block size="lg" color="success">
                  <ShoppingCartIcon /> Check Out
                </MDBBtn>
              </form>
            )}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
