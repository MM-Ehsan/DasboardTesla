import { VStack, HStack, Text, Select, Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <VStack align="stretch" spacing={4} mb={6}>
     
      <HStack justify="space-between" flexWrap="wrap">
        <Text fontSize="2xl" fontWeight="bold">
          Reports
        </Text>

        <Button
          leftIcon={<DownloadIcon />}
          colorScheme="gray"
          variant="outline"
          size="sm"
          rounded="lg"
        >
          Download
        </Button>
      </HStack>

      {/* Row 2: Filters */}
      <HStack spacing={4} justify="space-around" flexWrap="wrap">
        <Select
          placeholder="Timeframe: All-time"
          size="sm"
          rounded="xl"
          w={{ base: "100%", sm: "340px" }}
        />
        <Select
          placeholder="People: All"
          size="sm"
          rounded="xl"
          w={{ base: "100%", sm: "340px" }}
        />
        <Select
          placeholder="Topic: All"
          size="sm"
          rounded="xl"
          w={{ base: "100%", sm: "340px" }}
        />
      </HStack>
    </VStack>
  );
}
