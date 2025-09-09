import { Box, Text, VStack, HStack, Icon, Avatar } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

export default function Leaderboard({ title, data, showAvatars = false }) {
  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="xl"
      shadow="sm"
      bg="white"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4} color="gray" >
        {title}
      </Text>
      <VStack align="stretch" spacing={4}>
        {data.map((item, index) => (
          <HStack key={index} justify="space-between" align="center">
            
            <HStack spacing={3} align="center">
              {showAvatars && (
                <Avatar name={item.name} src={item.avatar} size="sm" />
              )}
              <Box>
                <Text fontWeight="medium">{item.name}</Text>
                {item.subtext && (
                  <Text fontSize="xs" color="gray.500">
                    {item.subtext}
                  </Text>
                )}
              </Box>
            </HStack>

            {/* Right side: Rank + Arrow */}
            <HStack spacing={2}>
              <Text fontWeight="bold" color="gray.600">
                {index + 1}
              </Text>
              <Icon
                as={item.trend === "up" ? TriangleUpIcon : TriangleDownIcon}
                color={item.trend === "up" ? "green.400" : "red.400"}
                boxSize={5}
              />
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
