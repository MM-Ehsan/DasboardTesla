import { Box, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Mon", users: 30 },
  { name: "Tue", users: 45 },
  { name: "Wed", users: 60 },
  { name: "Thu", users: 50 },
  { name: "Fri", users: 70 },
  { name: "Sat", users: 40 },
  { name: "Sun", users: 55 },
];

export default function ActivityChart() {
  return (
    <Box
      bg="white"
      p={8}
      rounded="xl"
      shadow="md"
      border="1px solid"
      borderColor="gray.200"
      h="300px"
    >
      <Text fontWeight="bold" mb={4}>
        Activity
      </Text>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#4193dfff" radius={[6, 6, 0, 0]}  barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
