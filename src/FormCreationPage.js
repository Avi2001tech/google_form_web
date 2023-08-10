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
import MCQSection from './MCQSection';

function FormCreationPage() {
  const [showMCQSection, setShowMCQSection] = useState(false);
  const [completedSections, setCompletedSections] = useState([]);

  const handleRadioChange = (event) => {
    setShowMCQSection(event.target.value === 'mcq');
  };

  const handleRemoveSection = () => {
    setShowMCQSection(false);
  };

  const handleMarkAsComplete = () => {
    setCompletedSections([...completedSections, 'mcq']); // Mark the current section as complete
    setShowMCQSection(false);
  };

  return (
    <Box p={4} width="100%" height="100vh" overflow="auto">
      <Flex justifyContent="center">
        <Box width="66%">
          <Box p={4} borderWidth={1} borderRadius="xl" boxShadow="md" background="white">
            <Heading size="lg" mb={4}>
              Create a New Form
            </Heading>
            <VStack spacing={4} align="stretch">
              <Input placeholder="Section Title" />
              <Textarea placeholder="Section Description" />
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
                  value="mcq"
                  onChange={handleRadioChange}
                  isChecked={showMCQSection}
                >
                  Add an mcq question
                </Radio>
                {/* ... Other menu items */}
              </MenuList>
            </Menu>
            {completedSections.map((section, index) => (
              <MCQSection
                key={index}
                onComplete={handleMarkAsComplete}
                onRemove={() => {
                  const updatedSections = completedSections.filter((_, i) => i !== index);
                  setCompletedSections(updatedSections);
                }}
              />
            ))}
            {showMCQSection && (
              <MCQSection
                onComplete={handleMarkAsComplete}
                onRemove={handleRemoveSection}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default FormCreationPage;
