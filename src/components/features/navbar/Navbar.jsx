import { Button, Container, Nav, Navbar as NavbsrBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";

export default function NavBar() {
  const { openCart, cartQuantity } = useShopingCart();

  return (
    <NavbsrBs
      sticky="top"
      style={{ background: "#E59866" }}
      className=" shadow-sm mb-1 w-100"
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
          <Nav.Link to="/user-profile" as={NavLink}>
            User Profile
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact us
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{
            width: "2rem",
            height: "2rem",
            position: "relative",
            marginRight: "1rem ",
          }}
          variant="light"
          className="rounded-circle "
        >
          <img src="/imgs/shopping-cart.png" />

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            // style={{width:"rem", height:"2rem"}}
            viewBox="0 0 -30 10"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg> */}
          {cartQuantity > 0 && (
            <div>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.0rem",
                  height: "1.0rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%,25%)",
                }}
              >
                {cartQuantity}
              </div>
            </div>
          )}
        </Button>
        <img width="35" src="/imgs/user-logo.png" />
      </Container>
    </NavbsrBs>
  );
}
