import { Routes, Route } from "react-router";
import { Container as Main } from "react-bootstrap";
import {
  Home,
  About,
  Contact,
  Login,
  PageNotFound,
  SignUp,
  UserProfile,
  Store,
  ForgotPassword,
} from "./components/pages/index";
import { Header, Footer } from "./components/features/index";
import ShopingCartProvider from "./components/context/shoping-cart-context/ShopingCartContext";
import ProtectedRoute from "../src/components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <ShopingCartProvider>
      <div
        style={{ background: "gray" }}
        className="d-flex flex-column align-items-center"
      >
        <Header />
        <Main
          style={{ minHeight: "80vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/" element={<Home />} /> */}

            <Route path="/home" element={<Home />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </ShopingCartProvider>
  );
}

export default App;
