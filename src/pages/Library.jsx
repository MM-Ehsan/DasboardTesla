// src/pages/Library.jsx
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Tag,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Library() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10; // ✅ 10 resources per page

  // Mock resources (expandable)
  const resources = Array.from({ length: 30 }, (_, i) => ({
    title: [
      "Food Safety",
      "COVID-19 Protocols",
      "Cybersecurity Basics",
      "Company Networking",
      "Workplace Ethics",
      "Data Privacy",
      "Emergency Preparedness",
      "Project Management",
      "Customer Service",
      "Leadership Skills",
    ][i % 10],
    description: `Description for resource ${i + 1} covering essential workplace knowledge.`,
    tags: [
      ["Health", "Compliance"],
      ["Health", "Safety"],
      ["IT", "Security"],
      ["IT", "Collaboration"],
      ["HR", "Culture"],
      ["IT", "Privacy"],
      ["Safety", "Preparedness"],
      ["Management", "Efficiency"],
      ["Support", "Communication"],
      ["Leadership", "Growth"],
    ][i % 10],
  }));

  // Filter logic
  const filteredResources = resources.filter((res) =>
    [res.title, res.description, res.tags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredResources.length / pageSize);
  const paginatedResources = filteredResources.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <Box>
      {/* Page Header */}
      <Heading size="lg" mb={2}>
        Library
      </Heading>
      <Text color="gray.600" mb={6}>
        Explore workplace learning resources, compliance guides, and IT best practices.
      </Text>

      {/* Search Bar */}
      <InputGroup mb={6} maxW="400px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search resources..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset pagination on new search
          }}
        />
      </InputGroup>

      {/* Resource List */}
      {paginatedResources.length > 0 ? (
        <VStack spacing={4} align="stretch">
          {paginatedResources.map((res, idx) => (
            <Box
              key={idx}
              p={4}
              bg="white"
              shadow="sm"
              borderRadius="md"
              _hover={{ shadow: "md", transform: "scale(1.01)" }}
              transition="all 0.2s"
            >
              <Heading size="sm" mb={2}>
                {res.title}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={2}>
                {res.description}
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {res.tags.map((tag, i) => (
                  <Tag key={i} colorScheme="blue" size="sm" borderRadius="full">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </Box>
          ))}
        </VStack>
      ) : (
        <Text color="gray.500" fontStyle="italic">
          No resources found ❌
        </Text>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Flex mt={6} justify="center" align="center" gap={4}>
          <Button
            size="sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            isDisabled={page === 1}
          >
            Prev
          </Button>
          <Text fontSize="sm">
            Page {page} of {totalPages}
          </Text>
          <Button
            size="sm"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            isDisabled={page === totalPages}
          >
            Next
          </Button>
        </Flex>
      )}
    </Box>
  );
}
