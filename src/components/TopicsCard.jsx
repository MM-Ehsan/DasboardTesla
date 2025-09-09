

import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Progress,
  Image,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

export default function TopicsCard({ title, topics }) {
  return (
    <Card borderRadius="xl" boxShadow="sm" p={4}>
      <CardHeader pb={2}>
        <Text fontSize="lg" fontWeight="bold" color="gray.600">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          {topics.map((topic, index) => (
            <Box key={index}>
              <HStack spacing={3} mb={1}>
                
                <Image
                  src={topic.icon}
                  alt={topic.name}
                  boxSize="10" 
                  borderRadius="md" 
                     
                />
                <Text fontWeight="medium" flex="1">
                  {topic.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {topic.value}% Correct
                </Text>
              </HStack>
              <Progress
                value={topic.value}
                size="sm"
                borderRadius="md"
                sx={{
                  "& > div": {
                    background:
                      topic.gradient ||
                      "linear-gradient(to right, #8fcd3eff, #29ff7be2)",
                  },
                }}
              />
            </Box>
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
}
