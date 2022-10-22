import "./Home.css";
import { Typography, Box } from "@mui/material";
import React from "react";
import { Col, Container as div, Row } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import Grid from "@mui/material/Unstable_Grid2";

export default function Home() {
  return (
    <>
      <div className="container  bg-light d-flex flex-column align-items-center justify-content-center mt-1 mb-1">
        <div class="card bg-dark text-white mt-3 mb-5">
          <img
            class="card-img"
            src="/imgs/home-background-pic-2.jpg"
            alt="Card image"
          />
          <div class="card-img-overlay text-center d-flex flex-column align-items-center justify-content-center">
            <h1
              // style={{ fontSize: "5vw", backgroundColor: "black" }}
              class="card-title bg-dark"
            >
              Welcome to...
            </h1>{" "}
            <h1
              style={{
                fontSize: "10vw",
                backgroundColor: "black",
                color: "yellow",
              }}
              class="card-title"
            >
              Art 2 Heart
            </h1>
            <h3 class="card-text">
              We are excited to welcome you to our website. Here you will find a
              wonderful selection of unique quilting patterns and quilting
              books. We have loads of fun and interesting products to choose
              from. Happy sewing!
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
            <h2>header</h2>
            <h5>sec mbm</h5>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dicta pariatur quis odio recusandae necessitatibus
              ullam dolore. Eos, delectus repellat velit ipsam nihil nobis vitae
              maxime nesciunt aliquam dicta. Accusantium neque optio,
              perspiciatis officiis doloribus facilis similique vero sed qui eum
              obcaecati repudiandae? Facere voluptatem ipsam odit at nemo! Harum
              velit provident adipisci veritatis eius saepe labore earum
              voluptas totam. Maiores, excepturi consequatur qui, eveniet enim
              odio consequuntur dolores at est autem nihil. Impedit officia,
              consequuntur ea a tenetur praesentium nam ducimus repellendus,
              accusantium itaque unde. Omnis consequatur facilis dolores natus
              expedita consectetur iusto ad cum laudantium exercitationem? Quae,
              perspiciatis!
            </h4>
          </Grid>
          <Grid xs={12} md={6}>
            <h2>header</h2>
            <h5>sec mbm</h5>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dicta pariatur quis odio recusandae necessitatibus
              ullam dolore. Eos, delectus repellat velit ipsam nihil nobis vitae
              maxime nesciunt aliquam dicta. Accusantium neque optio,
              perspiciatis officiis doloribus facilis similique vero sed qui eum
              obcaecati repudiandae? Facere voluptatem ipsam odit at nemo! Harum
              velit provident adipisci veritatis eius saepe labore earum
              voluptas totam. Maiores, excepturi consequatur qui, eveniet enim
              odio consequuntur dolores at est autem nihil. Impedit officia,
              consequuntur ea a tenetur praesentium nam ducimus repellendus,
              accusantium itaque unde. Omnis consequatur facilis dolores natus
              expedita consectetur iusto ad cum laudantium exercitationem? Quae,
              perspiciatis!
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
        <Row className="mb-5 mt-5 ">
          <Col>
            <img
              className="img-responsive mb-4 rounded mx-auto d-block  "
              src="/imgs/logo.png"
              alt="logo"
              style={{ width: "12rem" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              asperiores laboriosam modi nemo consequuntur incidunt voluptatibus
              dolor at accusamus. Omnis illum suscipit possimus nulla nostrum
              aliquid voluptatem similique, dicta incidunt expedita deserunt
              est!
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
