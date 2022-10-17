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

  function login(email, password) {
    return methods.signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function restPassword(email) {
    return methods.sendPasswordResetEmail(auth,email);
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
    login,
    logout,
    restPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
