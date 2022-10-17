import { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
      <Card
        style={{ display: "grid", placeItems: "center" }}
        className="text-center "
      >
        <Card.Body>
          <h2 className=" mb-4">Profile</h2>
          <Card.Img style={{ width: "30%" }} src="/imgs/user-logo.png" />

          {error && <Alert variant="danger">{error}</Alert>}
          <Card.Text>
            <strong>Email: </strong>
            {currentUser.email}
            {/* {(currentUser && currentUser.email) || `Please log in or sign up`} */}
          </Card.Text>
        </Card.Body>
        <div>
          <Button onClick={handelLogout} className="w-100 mt-3 mb-3" type="submit">
            Log Out
          </Button>
        </div>
      </Card>
    </>
  );
}
