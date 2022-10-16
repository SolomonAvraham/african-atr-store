import { Routes, Route } from "react-router";
import React from "react";
import {
  Home,
  About,
  Contact,
  Login,
  PageNotFound,
  SignUp,
  UserProfile,
  Store
} from "./components/pages/index";
import { Header, Footer } from "./components/features/index";
import ShopingCartProvider from "./components/context/shoping-cart-context/ShopingCartContext";

function App() {
  return (
    <ShopingCartProvider>
      <div className="d-flex flex-column align-items-center">
        <Header />
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ShopingCartProvider>
  );
}

export default App;
