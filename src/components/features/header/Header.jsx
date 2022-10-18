import ResponsiveAppBar from "../navbar/Navbar";
import { useAuth } from "../../context/auth-context/AuthContext";
export default function Header() {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser && (
        <div className="text-center bg-dark text-light  ">
          Welcome Back {currentUser.email}
        </div>
      )}
      <ResponsiveAppBar  />
    </>
  );
}
