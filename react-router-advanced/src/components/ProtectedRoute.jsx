import React from "react";
import { Navigate } from "react-router-dom";

// Props: children (the protected component), isAuthenticated (boolean)
const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect to home page if not authenticated
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
