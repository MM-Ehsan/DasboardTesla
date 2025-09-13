// src/AppLayout.jsx
  // src/AppLayout.jsx
import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Report";
import Library from "./pages/Library";
import People from "./pages/People";
import Settings from "./pages/Settings";
import GetStarted from "./pages/GetStarted";

function AppLayout() {
  const [activePage, setActivePage] = useState("reports");
  const [refreshKey, setRefreshKey] = useState(0); // State to force re-mount

  const renderPage = () => {
    switch (activePage) {
      case "reports":
        return <Reports key={refreshKey} />; 
      case "library":
        return <Library />;
      case "people":
        return <People />;
      case "settings":
        return <Settings />;
      case  "GetStarted":
        return <GetStarted setActivePage={setActivePage} />;
      default:
        return <Reports />;
    }
  };

  return (
    <Flex>
      {/* Sidebar */}
      <Sidebar setActivePage={setActivePage} activePage={activePage} setRefreshKey={setRefreshKey} />

      {/* Main Content */}
      <Box ml="250px" flex="1" bg="gray.50" minH="100vh" p={6}>
        {renderPage()}
      </Box>
    </Flex>
  );
}

export default AppLayout;
