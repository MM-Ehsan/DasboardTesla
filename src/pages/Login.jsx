
import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

export default function Login({ setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const bg = useColorModeValue("white", "gray.800");

  const handleLogin = () => {
    // minimal validation
    if (!email) return alert("Please enter an email");
    dispatch(login({ email })); // mock login
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.100">
      <Box w="100%" maxW="400px" p={8} bg={bg} borderRadius="xl" boxShadow="lg">
        <VStack spacing={6} align="stretch">
          <Heading size="lg" textAlign="center">
            Welcome Back
          </Heading>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            Please login to continue
          </Text>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="blue" size="lg" onClick={handleLogin} borderRadius="full">
            Log In
          </Button>

          <Text fontSize="sm" textAlign="center">
            Don’t have an account?{" "}
            <Link color="blue.500" onClick={() => setShowSignup(true)} style={{ cursor: "pointer" }}>
              Sign up
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
