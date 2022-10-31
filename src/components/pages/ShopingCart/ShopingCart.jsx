import { Offcanvas, Col, Stack } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import formatCurrency from "../../../utilities/formatCurrency";
import storeItems from "../../../services/items.json";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ShopingCart({ isOpen }) {
  const { closeCart, cartItems } = useShopingCart();
  return (
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
            <MDBBtn color="success">
              Check out {"     "}
              <ShoppingCartIcon />
            </MDBBtn>
          </MDBBtnGroup>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}