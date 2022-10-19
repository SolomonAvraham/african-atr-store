import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Contact</h1>

      <div class=" d-flex flex-column justify-content-center align-items-center mb-5">
        <label for="FormControlTextarea" class="form-label">
          Please feel free to write us down...
        </label>
        <textarea
          class="form-control"
          id="FormControlTextarea"
          rows="7"
        ></textarea>
        <MDBBtnGroup
        className="mt-4"
          shadow="3">
          <MDBBtn color="dark">Submit</MDBBtn>
        </MDBBtnGroup>
      </div>
    </div>
  );
}
