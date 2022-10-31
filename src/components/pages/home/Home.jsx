import "./Home.css";

import { Col, Row } from "react-bootstrap";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigateToStore = useNavigate();
  return (
    <>
      <div className="container text-center  bg-light d-flex flex-column align-items-center justify-content-center mt-1 mb-1">
        <hr className="bg-dark   w-100" />
        <Row className="mt-5 mb-5 homePagePic">
          <Col>
            <img
              src="./imgs/home-pic.jpeg"
              alt="home-page-pic"
              className="img-fluid mainPic"
            />
            <div className="homeHeader mt-5  ">
              <h1 className="display-1">Welcome to Art 2 Heart</h1>
              <h2 className="display-5">
                Hello there, we are glad you are here! you can find a lot of
                African art, from pictures and paintings by new artist who needs
                our support to expose their amazing art of work! see you at the
                cart section ☺︎
              </h2>
            </div>
          </Col>
        </Row>
        <hr className="bg-dark mb-5 w-100" />

        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <img
              src="./imgs/art-5.jpeg"
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
              <h1 className="container bg-dark text-light">Art 2 Hearth</h1>
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
            <h1 className="container bg-dark text-light">The ROOTS</h1>

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
              src="${process.env.PUBLIC_URL}/imgs/art-7.jpeg"
              className="img-thumbnail shadow-5"
              alt="..."
            />
          </Grid>
          <Row className="mb-1 mt-5 rounded mx-auto d-block fs-3">
            <Col>
              Vist our <Link to="/store">Store</Link>.
            </Col>
          </Row>
        </Grid>
        <hr className="bg-dark mt-5 w-100" />
        <Row className="mb-5 mt-5 ">
          <Col>
            <img
              className="img-responsive mb-4 mt-5 rounded mx-auto d-block  "
              src="${process.env.PUBLIC_URL}/imgs/logo.png"
              alt="logo"
              style={{ width: "5rem", opacity: "0.1" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
