import {
  Button,
  Card,
  Container,
  Nav,
  Navbar as NavbsrBs,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";
import { useAuth } from "../../context/auth-context/AuthContext";

export default function NavBar() {
  const { openCart, cartQuantity } = useShopingCart();
  const { currentUser } = useAuth();

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
        {currentUser && (
          <>
            <Nav className="me-auto">
              <Nav.Link to="/home" as={NavLink}>
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
            <>
              <span>
                <Link
                  style={{
                    marginRight: "0.3rem ",
                    fontWeight: "bolder",
                    textDecoration: "none",
                  }}
                  to="/user-profile"
                >
                  {currentUser.email}
                </Link>
              </span>
              <Card.Img
                style={{
                  width: "2rem",
                  marginRight: "1rem ",
                }}
                src="/imgs/user-logo.png"
              />
            </>
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
          </>
        )}
      </Container>
    </NavbsrBs>
  );
}
