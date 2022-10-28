import { useState } from "react";
import { Form, Button, Card, Alert,Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context/AuthContext";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

      const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== rePassword) {
      return setError("Password do not match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/login");
    } catch (error) {
      setError("Faild to create an account");
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
          <h2 className="text-center mb-4">Sign up</h2>
          {error && (
            <Alert className="text-center" variant="danger">
              {error}
            </Alert>
          )}
          <Form.Group id="fName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Form.Group id="birthdate">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => {
                setBirthdate(e.target.value);
              }}
              required
            />
          </Form.Group>
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
            <Form.Group id="rePassword">
              <Form.Label>Re-Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sing Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 mb-5">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </Card> 
      </Container>

     
    </>
  );
}
