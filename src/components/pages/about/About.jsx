import React from "react";
import { Container } from "react-bootstrap";
import Contact from "../contact/Contact";

export default function About() {
  return (
    <Container
      className="bg-light mt-1  d-flex flex-column justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <h1 className="container mt-2   bg-dark text-light text-center mt-5 display-3">
        About us
      </h1>
      <div class="card mt-5">
        <img
          src="/imgs/sol-profile-pic.jpeg"
          class="card-img-top img-thumbnail"
          alt="sol-profile-pic"
          style={{ width: "8rem" }}
        />
      </div>
      <div class="col-md-6 text-center mt-3 ">
        <div class="text-bg-dark fs-5">Founder</div>
        <h2 class="mt-3 text-dark fw-bold">Solomon Avraham</h2>

        <p>
          Hello, my name is Solomon Avraham, I'm 31 years old and from Hadera.
          I'm a full stack developer and study at 'Tech Career'. I'm the founder
          of Art 2 Heart. the place where you might find some of our art, and
          support the new artist that needs that push in their career.
        </p>
      </div>

      <div class="col-md-6 text-center ">
        <h4>We looking for an Artists, try your luck!</h4>
        <p>
          You can mail us your art of work and we will be back to you within a
          couple of days. See you then.
        </p>{" "}
      </div>
      <Contact />
    </Container>
  );
}
