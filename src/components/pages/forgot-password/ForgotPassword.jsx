import { Link } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";
import { useAuth } from "../../context/auth-context/AuthContext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { restPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage(" ");

      setError("");
      setLoading(true);
      await restPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Faild to rest Password");
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
        <Card className="d-sm-flex w-100 d-md-flex flex-column align-items-center ">
          <Card.Body className="w-75">
            <h2 className="text-center mb-4"> Password Rest</h2>
            {error && (
              <Alert className="text-center" variant="danger">
                {error}
              </Alert>
            )}
            {message && (
              <Alert className="text-center" variant="success">
                {message}
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

              <Button disabled={loading} className="w-100 mt-5" type="submit">
                Rest Password
              </Button>
              <Card.Text className="text-center mt-3">
                <Link to="/login">Login</Link>
              </Card.Text>
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
