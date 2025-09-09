import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { FiBarChart2, FiBook, FiUsers, FiActivity, FiSettings, FiHelpCircle } from "react-icons/fi";

export default function Sidebar() {
  return (
    <Box
      w="250px"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      minH="100vh"
      p={5}
      position="fixed"
      
    >
      {/* Logo */}
      <Text fontSize="2xl" fontWeight="bold" mb={10} color="red.500" >
        TESLA
      </Text>

      {/* Menu */}
      <VStack align="stretch" spacing={4}>
        <Button leftIcon={<FiBarChart2 />} variant="ghost" justifyContent="flex-start">
          Reports
        </Button>
        <Button leftIcon={<FiBook />} variant="ghost" justifyContent="flex-start">
          Library
        </Button>
        <Button leftIcon={<FiUsers />} variant="ghost" justifyContent="flex-start">
          People
        </Button>
        <Button leftIcon={<FiActivity />} variant="ghost" justifyContent="flex-start">
          Activities
        </Button>
      </VStack>

      {/* Support Section */}
      <VStack align="stretch" spacing={4} mt={10}>
        <Button leftIcon={<FiHelpCircle />} variant="ghost" justifyContent="flex-start">
          Get Started
        </Button>
        <Button leftIcon={<FiSettings />} variant="ghost" justifyContent="flex-start">
          Settings
        </Button>
      </VStack>
    </Box>
  );
}
