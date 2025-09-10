// src/pages/Signup.jsx
import { useDispatch } from "react-redux";
import { signup } from "../slices/authSlice";
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Signup({ setShowSignup }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");      
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const newUser = { name, email };         
    dispatch(signup(newUser));
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      p={8}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <Heading mb={6}>Sign Up</Heading>
      <VStack spacing={4}>
        
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
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        {/* Password Field */}
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {/* Signup button */}
        <Button colorScheme="teal" onClick={handleSignup} w="full">
          Sign Up
        </Button>

        {/* Toggle back to Login */}
        <Button
          variant="link"
          colorScheme="blue"
          onClick={() => setShowSignup(false)}
        >
          Already have an account? Log in
        </Button>
      </VStack>
    </Box>
  );
}
