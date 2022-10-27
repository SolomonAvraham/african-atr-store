import React from "react";
import { Container } from "react-bootstrap";
import Contact from "../contact/Contact";
import "./About.css";

export default function About() {
  return (
    <Container className="bg-light mt-1  d-flex flex-column justify-content-center  ">
      <div className="aboutPageBackground d-flex flex-column justify-content-center  ">
        <h1 className=" mt-2 bg-dark text-light text-center mt-5 display-3">
          About us
        </h1>
        <div
          style={{ width: "15%" }}
          class="card mt-5 d-block rounded mx-auto    "
        >
          <img
            src="/imgs/sol-profile-pic.jpeg"
            class="img-thumbnail  "
            alt="sol-profile-pic"
            style={{ width: "100%" }}
          />
        </div>
        <div class="col-md-6 text-center mt-3   mx-auto    ">
          <div style={{ fontFamily: "Amatic SC" }} class="text-bg-dark fs-3">
            Founder
          </div>

          <h2
            style={{ fontFamily: "Amatic SC" }}
            class="mt-3 text-dark fw-bold fs-1"
          >
            Solomon Avraham
          </h2>
          <p
            class="  fs-4   "
            style={{ fontFamily: "Amatic SC" }}
          >
            Hello, my name is Solomon Avraham, I'm 31 years old and from Hadera.
            I'm a full stack developer and study at 'Tech Career'. I'm the
            founder of Art 2 Heart. the place where you might find some of our
            art, and support the new artist that needs that push in their
            career.
          </p>
        </div>

        <div class="col-md-6 text-center fs-5 mx-auto">
          <h3 style={{ fontFamily: "Amatic SC", fontWeight: "bolder" }}>
            We looking for an Artists, try your luck!
          </h3>
          <p style={{ fontFamily: "Amatic SC" }}>
            You can mail us your art of work and we will be back to you within a
            couple of days. See you then.
          </p>{" "}
        </div>
        <Contact />
      </div>
    </Container>
  );
}
