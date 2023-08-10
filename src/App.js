import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Flex,
  VStack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Link,BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; // Import necessary components from react-router-dom
import IntroPage from './IntroPage';
import FormCreationPage  from './FormCreationPage'; 

function App() {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <ChakraProvider>
      <Flex minHeight="100vh" alignItems="center" justifyContent="center">
        <BrowserRouter>
          <Switch>
            <Route path="/intro" component={IntroPage} />
            <Route path="/create-form" component={FormCreationPage} />
            <Route path="/">
              <Card
                title={isLoginForm ? 'Login' : 'Sign Up'}
                form={isLoginForm ? <LoginForm /> : <SignupForm />}
                onToggle={toggleForm}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </Flex>
    </ChakraProvider>
  );
}

function Card({ title, form, onToggle }) {
  return (
    <Box
      p={6}
      borderWidth={1}
      borderRadius="xl" // Increase the border radius
      boxShadow="md"
      width={{ base: '100%', md: '30%' }} // Take up 1/3 of screen on medium and larger screens
      background="white" // Set card background to white
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      {form}
      <Button
        colorScheme="teal"
        onClick={onToggle}
        mt={4}
        borderRadius="lg"
        width="100%"
      >
        {title === 'Login' ? 'Switch to Sign Up' : 'Switch to Login'}
      </Button>
    </Box>
  );
}

function LoginForm() {
  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Link to="/intro"> {/* Link to IntroPage */}
        <Button colorScheme="teal" width="100%">
          Login
        </Button>
      </Link>
    </VStack>
  );
}

function SignupForm() {
  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Input placeholder="Name" />
      <Link to="/intro"> {/* Link to IntroPage */}
        <Button colorScheme="teal" width="100%">
          Sign Up
        </Button>
      </Link>
    </VStack>
  );
}

export default App;

