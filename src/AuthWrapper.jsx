
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./AppLayout";

export default function AuthWrapper() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showSignup, setShowSignup] = useState(false);

  if (!isAuthenticated) {
    return (
      <Box>
        {showSignup ? (
          <Signup setShowSignup={setShowSignup} />
        ) : (
          <Login setShowSignup={setShowSignup} />
        )}
      </Box>
    );
  }

  return <AppLayout />;
}
