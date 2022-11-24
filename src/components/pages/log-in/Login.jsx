import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";
import { useAuth } from "../../context/auth-context/AuthContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home")
    } catch (error) {
      setError("Faild to Log in");
      console.error(error.message);
    }
    setLoading(false);
  }


  return (
    <>
      <Container
        className="bg-light d-flex flex-column align-items-center justify-content-center mt-1 mb-1"
        style={{ height: "80vh" }}
      >


            <Card className="d-sm-flex w-100 d-md-flex flex-column align-items-center  ">
        <Card.Body className="w-75">
          <h2 className="text-center mb-4">Log In</h2>
          {error && (
            <Alert className="text-center" variant="danger">
              {error}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Card.Text className="text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </Card.Text>
            <Button disabled={loading} className="w-100 mt-1" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 mb-5">
          Need an account? <Link to="/sign-up">Sign Up</Link>
        </div>
      </Card>
      </Container>
  
    </>
  );
}
