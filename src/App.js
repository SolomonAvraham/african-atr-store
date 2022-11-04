import { Routes, Route } from "react-router";
import "./App.css";
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
import { useAuth } from "../src/components/context/auth-context/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return (
    <ShopingCartProvider>
      <Header />
      <main style={{ background: "#DDDBD9" }}>
        <Routes >
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {!currentUser ? <Login /> : <Home />}
              </ProtectedRoute>
            }
          />
          <Route
            path="/african-atr-store"
            element={!currentUser ? <Login /> : <Home />}
          />
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
      </main>
      <Footer />
    </ShopingCartProvider>
  );
}

export default App;
