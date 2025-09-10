// src/AppLayout.jsx
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Report.jsx";

function AppLayout() {
  return (
    <Flex>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <Box ml="250px" flex="1" bg="gray.50" minH="100vh" p={6}>
        <Reports />
      </Box>
    </Flex>
  );
}

export default AppLayout;
