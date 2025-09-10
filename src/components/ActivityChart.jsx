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
  { name: "Jan", users: 30 },
  { name: "Feb", users: 45 },
  { name: "Mar", users: 60 },
  { name: "Apr", users: 50 },
  { name: "May", users: 70 },
  { name: "Jun", users: 40 },
  { name: "Jul", users: 55 },
  { name: "Aug", users: 75 },
  { name: "Sep", users: 65 },
  { name: "Oct", users: 80 },
  { name: "Nov", users: 90 },
  { name: "Dec", users: 60 },
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
          <Bar dataKey="users" fill="#4193dfff" radius={[6, 6, 0, 0]}  barSize={13} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
