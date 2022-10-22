import React from "react";
import { Container } from "react-bootstrap";
import Contact from "../contact/Contact";

export default function About() {
  return (
    <Container
      className="bg-light mt-1  d-flex flex-column justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <h1 className="mt-2 fs-1 bg-dark text-light mt-5 ">About us</h1>
      <div class="card mt-5">
        <img
          src="/imgs/sol-profile-pic.jpeg"
          class="card-img-top img-thumbnail"
          alt="sol-profile-pic"
          style={{ width: "15rem" }}
        />
      </div>
      <div class="col-md-6 text-center mt-3 ">
        <div class="text-bg-dark fs-4">Founder</div>
        <h2 class="mt-3 text-dark">Solomon Avraham</h2>

        <p>
          Hello, my name is Solomon Avraham, i'm 31 years old from Hadera. i'm
          full stack developer and study at 'Tech Career'. i'm the founder of
          Art 2 Heart. the place that you might find some of our art, and
          suppourt the new artist that need that push in thier career.
        </p>
      </div>
      <div class="col-md-6 text-center ">
        <h2>Lack of Career association </h2>
        <p>
          an organization who seek talented artists who need the support and
          guides and the world of art, "Lack of Career association" established
          in 2019, and raise donations in total of 150K$ so far, with your
          support we will reach these who need us, you can purchase and art help
          the African art expose to world.
        </p>
      </div>
      <div class="col-md-6 text-center ">
        <h2>We looking for an Artists, try your luck!</h2>
        <p>
          You can maill us yout art of work and we will be back to you witin
          couple of days. See you then.
        </p>{" "}
      </div>
      <Contact />
    </Container>
  );
}
