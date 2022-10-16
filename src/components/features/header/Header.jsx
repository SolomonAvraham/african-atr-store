import React from "react";
import { Box, Container } from "@mui/system";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <>
      <Box
        sx={{ height: "3rem", width: "100vw", backgroundColor: "#99A3A4" }}
      ></Box>
      <Navbar />
    </>
  );
}
