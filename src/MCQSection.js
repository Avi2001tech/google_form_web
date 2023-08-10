import React from 'react';
import { VStack, Input, Textarea, Box, Text, Button, HStack } from '@chakra-ui/react';

function MCQSection({ onComplete, onRemove }) {
  const options = ['A', 'B', 'C', 'D'];

  return (
    <Box p={4} borderWidth={1} borderRadius="xl" boxShadow="md" background="white">
      <Textarea placeholder="Text Question" />
      <VStack spacing={2} align="stretch">
        {options.map((option, index) => (
          <HStack key={option}>
            <Text fontWeight="bold" mr={2}>{`${option}`}</Text>
            <Input placeholder={`Option ${option}`} />
          </HStack>
        ))}
        <HStack justifyContent="space-between">
          <Button size="sm" colorScheme="red" onClick={onRemove}>Remove Section</Button>
          <Button size="sm" colorScheme="green" onClick={onComplete}>Mark as Complete</Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default MCQSection;
