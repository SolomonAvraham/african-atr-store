import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container
      style={{
        height: "100vh",
        background: "white",
      }}
      className="d-flex flex-column justify-content-center align-items-center "
    >
      <h1 style={{ fontSize: "5rem" }}>404 error</h1>
      <h2 style={{ fontSize: "2rem" }}>This page doesn't exist.</h2>
      <img src="/imgs/logo.png" />
    </Container>
  );
}
