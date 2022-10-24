import "./Home.css";
import React from "react";
import { Col, Container as div, Row } from "react-bootstrap";

import Grid from "@mui/material/Unstable_Grid2";

export default function Home() {
  return (
    <>
      <div className="container text-center  bg-light d-flex flex-column align-items-center justify-content-center mt-1 mb-1">
        <hr className="bg-dark   w-100" />
        <Row className="mt-5 mb-5  shadow-5">
          <Col>
            <img
              src="/imgs/home-pic.jpeg"
              alt="home-page-pic"
              className="img-fluid  "
            />
          </Col>
        </Row>
        <hr className="bg-dark mb-5 w-100" />

        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <img
              src="/imgs/art-5.jpeg"
              className="img-thumbnail shadow-4"
              alt="..."
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div className="d-flex flex-column align-items-center justify-content-center fs-1 ">
              <h1>Art 2 Hearth</h1>
              <h4>
                We are excited to welcome you to our website. Here you will find
                a wonderful selection of unique art. African art describes the
                modern and historical paintings, sculptures, installations, and
                other visual culture from native or indigenous Africans and the
                African continent. The definition may also include the art of
                the African diasporas, such as: African American, Caribbean or
                art in South American societies inspired by African traditions.
                Despite this diversity, there are unifying artistic themes
                present when considering the totality of the visual culture from
                the continent of Africa.
              </h4>
            </div>
          </Grid>
          <Grid
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center justify-content-center fs-1"
          >
            <h1>The ROOTS</h1>

            <h4>
              African art has had an important influence on European Modernist
              art, which was inspired by their interest in abstract depiction.
              It was this appreciation of African sculpture that has been
              attributed to the very concept of "African art", as seen by
              European and American artists and art historians.
            </h4>
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src="/imgs/art-7.jpeg"
              className="img-thumbnail shadow-5"
              alt="..."
            />
          </Grid>
        </Grid>

        <Row className="mb-5 mt-5 ">
          <Col>
            <img
              className="img-responsive mb-4 mt-5 rounded mx-auto d-block  "
              src="/imgs/logo.png"
              alt="logo"
              style={{ width: "5rem" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
