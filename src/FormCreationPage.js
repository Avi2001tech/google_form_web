import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Textarea,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Input,
  Radio,
  HStack,
  Center,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import MCQSection from './MCQSection'; // Import the MCQSection component

function FormCreationPage() {
  const [showMCQSection, setShowMCQSection] = useState(false);

  const handleRadioChange = (event) => {
    setShowMCQSection(event.target.value === 'mcq');
  };

  return (
    <Box p={4} width="100%" height="100vh" overflow="auto">
      <Flex justifyContent="center">
        <Box width="66%"> {/* Update width to 66% for 2/3 of the screen */}
          <Box p={4} borderWidth={1} borderRadius="xl" boxShadow="md" background="white">
            <Heading size="lg" mb={4}>
              Create a New Form
            </Heading>
            <VStack spacing={4} align="stretch">
              <Input placeholder="Section Title" />
              <Textarea placeholder="Section Description" />
              {/* Add more form fields as needed */}
            </VStack>
            <Menu placement="right">
              <MenuButton as={Button} mt={4} width="100%">
                <Center>
                  <HStack>
                    <AddIcon />
                    <span>Add a Section</span>
                  </HStack>
                </Center>
              </MenuButton>
              <MenuList>
                <Radio
                  size="sm"
                  mr={2}
                  value="mcq"
                  onChange={handleRadioChange}
                  isChecked={showMCQSection}
                >
                  Add an mcq question
                </Radio>
                <MenuItem>
                  <Radio size="sm" mr={2} />
                  Add a text question
                </MenuItem>
                <MenuItem>
                  <Radio size="sm" mr={2} />
                  Upload media
                </MenuItem>
                <MenuItem>
                  <Radio size="sm" mr={2} />
                  Ask URL
                </MenuItem>
              </MenuList>
            </Menu>
            {showMCQSection && <MCQSection />}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default FormCreationPage;
