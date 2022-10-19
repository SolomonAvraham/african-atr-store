import React from "react";
import { Container } from "react-bootstrap";
import Contact from "../contact/Contact";

export default function About() {
  return (
    <Container className="bg-light mt-1  d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <h1 className="mt-2">About us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolores
        itaque nobis illum et veniam perferendis, excepturi debitis amet
        voluptate architecto impedit dicta, cupiditate dolorem id velit. Odio
        aliquid omnis quae libero, dignissimos cum rerum nisi quod quisquam
        minus, necessitatibus debitis esse totam repellendus? Aperiam voluptas
        debitis eligendi aut. Qui error in perspiciatis possimus corporis?
      </p>

      <h2>sec header</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolores
        itaque nobis illum et veniam perferendis, excepturi debitis amet
        voluptate architecto impedit dicta, cupiditate dolorem id velit. Odio
        aliquid omnis quae libero, dignissimos cum rerum nisi quod quisquam
        minus, necessitatibus debitis esse totam repellendus? Aperiam voluptas
        debitis eligendi aut. Qui error in perspiciatis possimus corporis?
      </p>

      <h2>third header</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolores
        itaque nobis illum et veniam perferendis, excepturi debitis amet
        voluptate architecto impedit dicta, cupiditate dolorem id velit. Odio
        aliquid omnis quae libero, dignissimos cum rerum nisi quod quisquam
        minus, necessitatibus debitis esse totam repellendus? Aperiam voluptas
        debitis eligendi aut. Qui error in perspiciatis possimus corporis?
      </p>
      <Contact />
    </Container>
  );
}
