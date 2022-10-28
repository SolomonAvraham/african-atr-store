import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import formatCurrency from "../../../utilities/formatCurrency";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

export default function StoreItems({ id, name, price, imgUrl, artistName }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShopingCart();
  const quantity = getItemQuantity(id);

  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);

  return (
    <>
      <Card>
        <MDBBtn style={{ background: "transparent" }} onClick={toggleShow}>
          {" "}
          <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover" }}
          />{" "}
        </MDBBtn>
        <MDBModal show={optSmModal} tabIndex="-1" setShow={setOptSmModal}>
          <MDBModalDialog size="lg">
            <MDBModalContent className="d-flex  justify-content-center align-items-center">
              <MDBModalHeader>
                <MDBModalTitle>
                  <img  className="img-fluid imgStore" src={imgUrl} />
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <Card.Body>
                  <Card.Title className="d-flex flex-column  justify-content-between align-items-center mb-4">
                    <Row>
                      <Col className=" fs-3 bg-dark text-light   ">
                        <span className="text-warning  ">Artist Name :</span>{" "}
                        {artistName}
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col>
                        <span className="text-warning fs-4 bg-dark text-light   ">
                          Art Name :{" "}
                        </span>
                        <span className=" fs-4 fw-bold bg-dark text-warning  ">
                          {name}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col className=" fs-4 fw-bold ">
                        <span className="text-warning fs-4 ">Price :</span>{" "}
                        <span className=" fs-4 fw-bold ">
                          {" "}
                          {formatCurrency(price)}
                        </span>
                      </Col>
                    </Row>
                  </Card.Title>
                  <div className="mt-auto">
                    {quantity === 0 ? (
                      <Button
                        className="w-100 bg-dark fs-3"
                        onClick={() => increaseCartQuantity(id)}
                      >
                        + ADD TO CARD
                      </Button>
                    ) : (
                      <div
                        className="d-flex align-items-center flex-column"
                        style={{ gap: ".5rem" }}
                      >
                        <div
                          className=" d-flex align-items-center jusify-content-center"
                          style={{ gap: ".5rem" }}
                        >
                          <Button
                            variant="warning"
                            onClick={() => increaseCartQuantity(id)}
                          >
                            +
                          </Button>
                          <span className="fs-3">{quantity} in cart </span>

                          <Button
                            variant="warning"
                            onClick={() => decreaseCartQuantity(id)}
                          >
                            -
                          </Button>
                        </div>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => removeFromCart(id)}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </MDBModalBody>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        <Card.Body>
          <Card.Title className="d-flex flex-column  justify-content-between align-items-center mb-4">
            <Row>
              <Col className=" fs-6 bg-dark text-light   ">
                <span className="text-warning  ">Artist Name :</span>{" "}
                {artistName}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <span className="text-warning fs-5 bg-dark text-light   ">
                  Art Name :{" "}
                </span>
                <span className=" fs-5 fw-bold bg-dark text-warning  ">
                  {name}
                </span>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className=" fs-4 fw-bold ">
                <span className="text-warning fs-4 ">Price :</span>{" "}
                <span className=" fs-4 fw-bold "> {formatCurrency(price)}</span>
              </Col>
            </Row>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100 bg-dark fs-5"
                onClick={() => increaseCartQuantity(id)}
              >
                + ADD TO CARD
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className=" d-flex align-items-center jusify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    variant="warning"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                  <span className="fs-3">{quantity} in cart </span>

                  <Button
                    variant="warning"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
