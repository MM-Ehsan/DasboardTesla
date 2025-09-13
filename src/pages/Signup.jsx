// src/pages/Signup.jsx
import { useDispatch } from "react-redux";
import { signup } from "../slices/authSlice";
import {
  Flex,
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Signup({ setShowSignup }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");      
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const bg = useColorModeValue("white", "gray.800");

  const handleSignup = () => {
    if (!email || !password) return alert("Please fill all fields");
    const newUser = { name, email };
    dispatch(signup(newUser));
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.100">
      <Box w="100%" maxW="400px" p={8} bg={bg} borderRadius="xl" boxShadow="lg">
        <VStack spacing={6} align="stretch">
          {/* Heading */}
          <Heading size="lg" textAlign="center">
            Create Account
          </Heading>

          <Text fontSize="sm" color="gray.500" textAlign="center">
            Sign up to get started
          </Text>

          {/* Name Field */}
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          {/* Email Field */}
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          {/* Password Field */}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {/* Signup button */}
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleSignup}
            borderRadius="full"
          >
            Sign Up
          </Button>

          {/* Toggle back to Login */}
          <Text fontSize="sm" textAlign="center">
            Already have an account?{" "}
            <Link
              color="blue.500"
              onClick={() => setShowSignup(false)}
              style={{ cursor: "pointer" }}
            >
              Log in
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
