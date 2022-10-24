import * as React from "react";
import './Navbar.css'
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useShopingCart } from "../../context/shoping-cart-context/ShopingCartContext";
import { useAuth } from "../../context/auth-context/AuthContext";

const pages = ["home", "store", "about"];
const settings = ["Logout"];
const settingsRoutes = ["/user-profile"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { openCart, cartQuantity, isOpen } = useShopingCart();
  const { currentUser } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

 

 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="bg-light navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={currentUser && "/home"}>
            <img style={{ width: "2.5rem" }} src=" /imgs/logo.png" alt="logo" className="logo" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="text-dark" />
            </IconButton>
            {currentUser && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page}>
                      <Typography color={"black"} textAlign="center">
                        {page.toUpperCase()}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          {currentUser && (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link to={page}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ marginLeft:".15rem",color: "white", display: "block",fontSize:"1rem",backgroundColor:"rgba(0,0,0,0.3)" }}
                    >
                       <span className="">{page}</span>
                    </Button>{" "}
                  </Link>
                ))}
              </Box>

              <Box
                sx={{
                  flexGrow: 0,
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Link
                    className="text-light bg-dark  me-3 text-decoration-none fs-5 fw-bolder   "
                    to="/user-profile"
                  >
                    {currentUser.email}
                  </Link>
                </Box>
                <Tooltip className="text-dark me-2">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" className="bg-dark border"/>
                  </IconButton>
                </Tooltip>
                <Button
                  onClick={openCart}
                  style={{
                    position: "relative",
                    backgroundColor: "rgba(0,0,0,0.855)",
                  }}
                >
                  <ShoppingCartIcon className="text-light" />
                  {cartQuantity > 0 && (
                    <div>
                      <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                          color: "black",
                          width: "1.0rem",
                          height: "1.0rem",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          transform: "translate(25%,25%)",
                        }}
                      >
                        {cartQuantity}
                      </div>
                    </div>
                  )}
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, items) => (
                    <Link to={settingsRoutes[items]}>
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
