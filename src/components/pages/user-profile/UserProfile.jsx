import { useState } from "react";
import { Card, Alert, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context/AuthContext";

export default function UserProfile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handelLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setError("Faild to log out");
    }
  }

  return (
    <>
      <Container
        style={{ minHeight: "80vh" }}
        className="bg-light d-flex flex-column align-items-center justify-content-center mt-1 mb-1"
      >
        <Card className="text-center ">
          <Card.Body>
            <h2 className=" mb-4">Profile</h2>
            <Card.Img
              style={{ width: "30%" }}
              src="https://raw.githubusercontent.com/SolomonAvraham/african-atr-store/dev/public/imgs/user-logo.png"
            />

            {error && <Alert variant="danger">{error}</Alert>}
            <Card.Text>
              <strong>Email: </strong>
              {currentUser.email}
              {/* {(currentUser && currentUser.email) || `Please log in or sign up`} */}
            </Card.Text>
          </Card.Body>
          <div>
            <Button
              onClick={handelLogout}
              className="w-100 mt-3 mb-3"
              type="submit"
            >
              Log Out
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
