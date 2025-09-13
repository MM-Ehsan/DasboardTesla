import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  VStack,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

export default function GetStarted({ setActivePage }) {
  const [checklist, setChecklist] = useState({
    profile: false,
    library: false,
    people: false,
    reports: false,
  });

  const toggleCheck = (key) =>
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Box>
      {/* Welcome Section */}
      <Heading size="lg" mb={2}>
        Welcome to Tesla Dashboard 
      </Heading>
      <Text color="gray.600" mb={8}>
        Here’s a quick guide to help you get started.
      </Text>

      {/* Quick Links */}
      <Heading size="md" mb={4}>
        Quick Links
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
        <Card borderRadius="xl" boxShadow="md" _hover={{ boxShadow: "xl" }}>
          <CardHeader>
            <Heading size="sm">Reports</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={4}>View analytics and company insights.</Text>
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => setActivePage("reports")} // ✅ navigation
            >
              Go to Reports
            </Button>
          </CardBody>
        </Card>

        <Card borderRadius="xl" boxShadow="md" _hover={{ boxShadow: "xl" }}>
          <CardHeader>
            <Heading size="sm">Library</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={4}>Explore resources and guides.</Text>
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => setActivePage("library")} // ✅ navigation
            >
              Go to Library
            </Button>
          </CardBody>
        </Card>

        <Card borderRadius="xl" boxShadow="md" _hover={{ boxShadow: "xl" }}>
          <CardHeader>
            <Heading size="sm">People</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={4}>Meet team members and view roles.</Text>
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => setActivePage("people")} // ✅ navigation
            >
              Go to People
            </Button>
          </CardBody>
        </Card>

        <Card borderRadius="xl" boxShadow="md" _hover={{ boxShadow: "xl" }}>
          <CardHeader>
            <Heading size="sm">Settings</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={4}>Manage profile and dashboard preferences.</Text>
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => setActivePage("settings")} // ✅ navigation
            >
              Go to Settings
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Divider mb={8} />

      {/* Checklist */}
      <Heading size="md" mb={4}>
        Onboarding Checklist
      </Heading>
      <VStack align="start" spacing={3} mb={8}>
        <Checkbox isChecked={checklist.profile} onChange={() => toggleCheck("profile")}>
          Complete your profile in Settings
        </Checkbox>
        <Checkbox isChecked={checklist.library} onChange={() => toggleCheck("library")}>
          Browse resources in Library
        </Checkbox>
        <Checkbox isChecked={checklist.people} onChange={() => toggleCheck("people")}>
          Connect with teammates in People
        </Checkbox>
        <Checkbox isChecked={checklist.reports} onChange={() => toggleCheck("reports")}>
          Review your first Report
        </Checkbox>
      </VStack>

      <Divider mb={8} />

      {/* Support Section */}
      <Box>
        <Heading size="md" mb={2}>
          Need Help?
        </Heading>
        <Text color="gray.600" mb={4}>
          Visit our help center or contact your admin for assistance.
        </Text>
        <Button colorScheme="purple">Go to Support</Button>
      </Box>
    </Box>
  );
}
