import React from 'react';
import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Flex,
  VStack,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Link,BrowserRouter, Route, Switch,useHistory } from 'react-router-dom'; // Import necessary components from react-router-dom
import IntroPage from './IntroPage';
import FormPage from './form_mainPage';

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
            <Route path="/create" component={FormPage} />
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Login successful, get the JWT token from the response
        const data = await response.json();
        const token = data.token;

        // Store the token in local storage or a secure storage method of your choice
        localStorage.setItem('token', token);

        // Redirect to a protected route or perform other actions upon successful login
        // For example, you can redirect to '/create'
        history.push('/create');
      } else {
        // Handle login error
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('API request error', error);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input
        placeholder="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button colorScheme="teal" width="100%" onClick={handleSubmit}>
        Login
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </VStack>
  );
}

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // User created successfully
        console.log('User created successfully');
        
        // Redirect to "/create" upon successful signup
        history.push('/create');
      } else {
        // Handle error
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('API request error', error);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input
        placeholder="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Input
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Button colorScheme="teal" width="100%" onClick={handleSubmit}>
        Sign Up
      </Button>
    </VStack>
  );
}

export default App;

