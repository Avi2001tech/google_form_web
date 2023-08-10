import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'; // Make sure to import the Link component if you're using React Router

function IntroPage() {
  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Avatar name="User Avatar" size="md" />
        <Text>Welcome to gf website</Text>
      </Flex>
      <Box mt={8} textAlign="center">
        <Heading size="lg" mb={4}>
          Welcome to Our Website
        </Heading>
        <Link to="/create-form">
          <Button colorScheme="teal" leftIcon={<AddIcon />}>
            Create a New Form
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default IntroPage;
