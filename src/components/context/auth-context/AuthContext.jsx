import React, { useContext, useEffect, useState } from "react";
import { auth, methods } from "../../../firebase/Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
 return methods.createUserWithEmailAndPassword(auth, email, password);
  }

useEffect(() => {
  const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    setLoading(false);
  });

  return unsubscribe;
}, []);

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
