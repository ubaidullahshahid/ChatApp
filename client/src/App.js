import React, { Children } from "react";
import Form from "./Modules/Form";
import Dashboard from "./Modules/Dashboard";
import { Navigate, redirect, Route, Routes } from "react-router-dom";

const App = () => {
  const ProtectedRoutes = ({ children }) => {
    const isLoggedIn = localStorage.getItem("user:token") !== null || true;
    console.log("isLoggedIn: " + isLoggedIn);
    if (!isLoggedIn) {
      return <Navigate to="/users/sign_in" />;
    } else if (
      ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
    ) {
      return <Navigate to="/" />;
    }
    return children;
  };
  return (
    <Routes>
      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={true} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoutes>
            <Form isSignInPage={false} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default App;
