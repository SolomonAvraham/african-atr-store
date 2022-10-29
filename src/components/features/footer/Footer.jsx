import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-light footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-uppercase fw-bold mb-4 bg-dark w-50 text-center">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="hover-zoom">
          <a
            target="blank"
            href="https://www.linkedin.com/in/solomon-avraham-82b8a2234/"
            className="me-4   display-3  icons"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            target="blank"
            href="https://github.com/SolomonAvraham"
            className="me-4 hover-zoom display-3  text-dark   icons"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="d-sm-flex align-items-center text-center text-md-start mt-5">
        <MDBContainer>
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img
                style={{ width: "3rem", marginRight: "1REM" }}
                src=" /imgs/logo.png"
                alt="logo"
                className="logo"
              />
              <h6 className="text-uppercase fw-bold mb-4 mt-1 bg-dark   text-center">
                African Style
              </h6>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 darkOpcity"
            >
              <h6 className="text-uppercase fw-bold mb-4 bg-dark   text-center">
                Contact
              </h6>
              <span className="bg-dark  ">
                <MDBIcon icon="home" className="me-5 " />
                TLV 10012, ISRAEL
              </span>
              <span className="bg-dark  ">
                <br />
                <MDBIcon icon="envelope" className="me-2 " />
                selmon561@gmail.com
              </span>
              <span className="bg-dark  ">
                <br />
                <MDBIcon icon="phone" className="me-3" /> + 972 (0)549727138
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.33)" }}
      >
        © 2022 Copyright: Art2Heart.com
      </div>
    </MDBFooter>
  );
}
