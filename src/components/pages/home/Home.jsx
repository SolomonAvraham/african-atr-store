import { Typography } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="/imgs/home-background-pic-2.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100  d-flex "
          itemId={2}
          src="/imgs/home-background-pic-1.jpg"
          alt="..."
          
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>
      <Typography variant="h1" component={"h1"}>
        Hello World
      </Typography>
      <Container>
        <Row>
          <Col>dgbsg</Col>
          <Col>dgbsg</Col>
          <Col>dgbsg</Col>
          <Col>dgbsg</Col>
        </Row>
      </Container>
    </>
  );
}
