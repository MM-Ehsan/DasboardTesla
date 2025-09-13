// src/components/Sidebar.jsx
import { Box, VStack, Text, Button, Spacer } from "@chakra-ui/react";
import {
  FiBarChart2,
  FiBook,
  FiUsers,
  FiActivity,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

export default function Sidebar({ setActivePage, activePage,setRefreshKey }) {
  const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logout());
  window.location.href = "/DasboardTesla/login"; 
};


  //  TESLA behavior
  const handleLogoClick = () => {
    if (activePage === "reports") {
       setRefreshKey((prev) => prev + 1);
    } else {
      setActivePage("reports");
    }
  };

  return (
    <Box
      w="250px"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      minH="100vh"
      p={5}
      position="fixed"
      display="flex"
      flexDirection="column"
    >
      {/* Logo */}
      <Text
     fontSize="3xl"
     fontWeight="900"
     fontFamily="'Orbitron', sans-serif"
     letterSpacing="widest"
     mb={10}
     color="red.500"
     cursor="pointer"
     onClick={handleLogoClick}
     >
     TESLA
     </Text>


      {/* Menu */}
      <VStack align="stretch" spacing={4}>
        <Button
          leftIcon={<FiBarChart2 />}
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => setActivePage("reports")}
        >
          Reports
        </Button>
        <Button
          leftIcon={<FiBook />}
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => setActivePage("library")}
        >
          Library
        </Button>
        <Button
          leftIcon={<FiUsers />}
          variant="ghost"
          justifyContent="flex-start"
          onClick={() => setActivePage("people")}
        >
          People
        </Button>
        
      </VStack>

      <Spacer />

      <VStack align="stretch" spacing={4} mt={10}>
        <Button leftIcon={<FiHelpCircle />} variant="ghost" justifyContent="flex-start" 
         onClick={() => setActivePage("GetStarted")}>
          Get Started
        </Button>
        <Button
         variant={activePage === "settings" ? "solid" : "ghost"}
          justifyContent="flex-start"
         onClick={() => setActivePage("settings")}
         leftIcon={<FiSettings />}
         >
          Settings
        </Button>
        <Button
          leftIcon={<FiLogOut />}
          variant="ghost"
          justifyContent="flex-start"
          color="red.500"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </VStack>
    </Box>
  );
}
