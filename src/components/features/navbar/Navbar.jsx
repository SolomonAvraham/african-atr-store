import { Button, Container, Nav, Navbar as NavbsrBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";

export default function NavBar() {
  const { openCart, cartQuantity } = useShopingCart();

  return (
    <NavbsrBs
      sticky="top"
      style={{ background: "#B9CCCD" }}
      className=" shadow-sm mb-1"
    >
      <Container>
        <div className=" me-auto">
          <Nav.Link to="/" as={NavLink}>
            <img className="rounded-circle" width="50" src="/imgs/logo.jpg" />
          </Nav.Link>
        </div>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
        <img width="35" src="/imgs/user-logo.png" />
      </Container>
    </NavbsrBs>
  );
}
