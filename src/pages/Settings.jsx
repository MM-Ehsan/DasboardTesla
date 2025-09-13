import {
  Box,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  VStack,
  Divider,
  Switch,
  Select,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Settings() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555-123-4567",
  });

  const [credentials, setCredentials] = useState({
    password: "",
    confirmPassword: "",
  });

  const [dashboardSettings, setDashboardSettings] = useState({
    theme: "light",
    notifications: true,
  });

  const handleSaveUserInfo = () => {
    console.log("User Info Saved:", userInfo);
  };

  const handleSaveCredentials = () => {
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }
    console.log("Password Updated:", credentials.password);
    setCredentials({ password: "", confirmPassword: "" }); // reset
  };

  const handleSaveDashboardSettings = () => {
    console.log("Dashboard Settings Saved:", dashboardSettings);
  };

  return (
    <Container maxW="800px" mx="auto" p={6}>
      <Heading size="lg" mb={2}>
        Settings
      </Heading>
      <Text color="gray.600" mb={8}>
        Manage your profile, credentials, and dashboard preferences.
      </Text>

      {/* User Info */}
      <Box mb={8} p={6} bg="white" boxShadow="md" borderRadius="lg">
        <Heading size="md" mb={4}>
          User Info
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              type="tel"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSaveUserInfo}>
            Save User Info
          </Button>
        </VStack>
      </Box>

      {/* Credentials */}
      <Box mb={8} p={6} bg="white" boxShadow="md" borderRadius="lg">
        <Heading size="md" mb={4}>
          Credentials
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={credentials.confirmPassword}
              onChange={(e) =>
                setCredentials({ ...credentials, confirmPassword: e.target.value })
              }
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSaveCredentials}>
            Update Password
          </Button>
        </VStack>
      </Box>

      {/* Dashboard Settings */}
      <Box p={6} bg="white" boxShadow="md" borderRadius="lg">
        <Heading size="md" mb={4}>
          Dashboard Settings
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl display="flex" alignItems="center">
            <FormLabel mb="0">Enable Notifications</FormLabel>
            <Switch
              isChecked={dashboardSettings.notifications}
              onChange={(e) =>
                setDashboardSettings({
                  ...dashboardSettings,
                  notifications: e.target.checked,
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <Select
              value={dashboardSettings.theme}
              onChange={(e) =>
                setDashboardSettings({
                  ...dashboardSettings,
                  theme: e.target.value,
                })
              }
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </Select>
          </FormControl>
          <Button colorScheme="blue" onClick={handleSaveDashboardSettings}>
            Save Dashboard Settings
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
