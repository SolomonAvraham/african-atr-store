import "./Home.css";
import { Typography, Box } from "@mui/material";
import React from "react";
import { Col, Container as div, Row } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import Grid from "@mui/material/Unstable_Grid2";  

export default function Home() {
  return (
    <>
      <div
        className="container  bg-light d-flex flex-column align-items-center justify-content-center mt-1 mb-1"

        // style={{ height: "80vh" }}
      >
        <div class="card bg-dark text-white mt-3 mb-5">
          <img
            class="card-img"
            src="/imgs/home-background-pic-2.jpg"
            alt="Card image"
          />
          <div class="card-img-overlay text-center">
            <h1 class="card-title">Welcome to...</h1>
            <h3 class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </h3>
            <h3 class="card-text">Last updated 3 mins ago</h3>
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <img
              src="/imgs/art-5.jpeg"
              className="img-thumbnail shadow-4"
              alt="..."
            />
          </Grid>
          <Grid xs={12} md={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            fugit. Dolor in beatae voluptate distinctio rem eaque blanditiis
            suscipit debitis mollitia corporis fuga reiciendis quam modi, maxime
            magnam, ea a cupiditate minus architecto praesentium? Amet similique
            soluta asperiores eveniet optio in consequatur saepe fugiat,
            repudiandae sed aliquid doloribus perferendis quidem expedita ut,
            provident unde tenetur?
          </Grid>
          <Grid xs={12} md={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            fugit. Dolor in beatae voluptate distinctio rem eaque blanditiis
            suscipit debitis mollitia corporis fuga reiciendis quam modi, maxime
            magnam, ea a cupiditate minus architecto praesentium? Amet similique
            soluta asperiores eveniet optio in consequatur saepe fugiat,
            repudiandae sed aliquid doloribus perferendis quidem expedita ut,
            provident unde tenetur?
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src="/imgs/art-7.jpeg"
              className="img-thumbnail shadow-5"
              alt="..."
            />
          </Grid>
        </Grid>

        <h2 className="mt-3">sgsfdsgsf dfhhds</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores
          neque iusto tenetur, debitis, voluptatum saepe dolor repudiandae ullam
          id earum vel repellendus! Repellendus eaque fugiat quibusdam facere
          qui iste, harum neque aut minus similique accusantium modi cupiditate
          expedita cum commodi voluptatum perspiciatis suscipit, distinctio
          tenetur nostrum, rem vitae tempora. Cum reiciendis quis commodi
          corporis sequi blanditiis explicabo eaque eum delectus tempore
          deserunt eius, veniam placeat consequatur accusamus possimus! Modi
          dolorem, cupiditate provident error corrupti culpa dolores officia
          quas harum cumque asperiores nobis, quos fugit atque ipsum sed hic
          nostrum expedita quisquam? Ab voluptatum assumenda unde fuga veniam
          eligendi ea.
        </p>
        <div className="mt-3  ">
          <img
            src="/imgs/art-8.jpeg"
            className="img-fluid shadow-5"
            alt="..."
          />
        </div>
        {/* <Row>
          <Col>dgbsg</Col>
          <Col>dgbsg</Col>
          <Col>dgbsg</Col>
          <Col>dgbsg</Col>
        </Row> */}
      </div>
    </>
  );
}
