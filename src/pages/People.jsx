
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  VStack,
  HStack,
  Tag,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function People() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10; // ✅ show 10 per page

  // 🔹 Generate 50 mock people
  const people = Array.from({ length: 50 }, (_, i) => ({
    name: `Employee ${i + 1}`,
    role: ["Software Engineer", "HR Manager", "Analyst", "Designer", "Supervisor"][
      i % 5
    ],
    department: ["IT", "HR", "Finance", "Design", "Logistics"][i % 5],
    tags: [
      ["React", "JavaScript", "Frontend"],
      ["HR", "Compliance", "Leadership"],
      ["Data", "Security", "Analytics"],
      ["UI/UX", "Figma", "Creativity"],
      ["Operations", "Efficiency", "Teamwork"],
    ][i % 5],
    avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`, // 70 unique avatars
  }));

  // 🔍 Filter based on search input
  const filteredPeople = people.filter((person) =>
    [person.name, person.role, person.department, person.tags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredPeople.length / pageSize);
  const paginatedPeople = filteredPeople.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <Box>
      {/* Page Header */}
      <Heading size="lg" mb={2}>
        People
      </Heading>
      <Text color="gray.600" mb={6}>
        Meet our team members and learn more about their roles and expertise.
      </Text>

      {/* Search Bar */}
      <InputGroup mb={6} maxW="400px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search people..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to first page on search
          }}
        />
      </InputGroup>

      {/* People List */}
      {paginatedPeople.length > 0 ? (
        <VStack spacing={4} align="stretch">
          {paginatedPeople.map((person, idx) => (
            <Box key={idx} p={4} bg="white" shadow="sm" borderRadius="md">
              <HStack spacing={4} align="center">
                <Avatar name={person.name} src={person.avatar} size="md" />
                <VStack align="start" spacing={0} flex="1">
                  <Text fontWeight="bold">{person.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {person.role} • {person.department}
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {person.tags.map((tag, i) => (
                      <Tag key={i} colorScheme="blue" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      ) : (
        <Text color="gray.500" fontStyle="italic">
          No people found ❌
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
