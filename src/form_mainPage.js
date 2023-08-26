
// import React, { useState } from "react";
// import {
//   ChakraProvider,
//   Box,
//   Center,
//   Input,
//   Textarea,
//   Button,
//   VStack,
//   HStack,
//   IconButton,
//   Text,
//   Divider,
//   Flex,
//   Spacer,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";

// function FormPage() {
//   const [segments, setSegments] = useState([]);
//   const [formName, setFormName] = useState("");
//   const [formDescription, setFormDescription] = useState("");
//   const [currentSegment, setCurrentSegment] = useState(null);
//   const [activeButton, setActiveButton] = useState(null);


//   const addSegment = () => {
//     setSegments([...segments, currentSegment]);
//   setCurrentSegment(null);
//   setActiveButton(null);
//   };


//   const addMCQ = () => {
//     setCurrentSegment(
//       <Box p={4} borderWidth="1px" borderRadius="md">
//         <Textarea placeholder="Enter your MCQ question" mb={2} />
//         <VStack spacing={2}>
//           <Input placeholder="Option A" />
//           <Input placeholder="Option B" />
//           <Input placeholder="Option C" />
//           <Input placeholder="Option D" />
//         </VStack>
//       </Box>
//     );
//   };

//   const addTextQuestion = () => {
//     setCurrentSegment(
//       <Box p={4} borderWidth="1px" borderRadius="md">
//         <Textarea placeholder="Enter your text question" mb={2} />
//         <Input placeholder="One-line answer" />
//       </Box>
//     );
//   };

//   const addMediaUpload = () => {
//     setCurrentSegment(
//       <Box p={4} borderWidth="1px" borderRadius="md">
//         <Center>
//           <IconButton
//             icon={<AddIcon />}
//             aria-label="Add Media"
//             size="lg"
//             fontSize="30px"
//             width="200px"
//             height="200px"
//             onClick={() => {
//               // Implement media upload logic here
//             }}
//           />
//         </Center>
//       </Box>
//     );
//   };
  

//   return (
//     <Center h="100vh">
//       <Box
//         w="calc(100vw * 2 / 3.5)"
//         p={4}
//         borderWidth="1px"
//         borderRadius="md"
//         maxHeight="80vh" // Set a maximum height
//         overflowY="auto" // Add vertical scrollbar if content overflows
//       >
//         <Center>
//           <Input
//             placeholder="Form Name"
//             value={formName}
//             onChange={(e) => setFormName(e.target.value)}
//             fontSize="2xl"
//             fontWeight="bold"
//             textAlign="center"
//           />
//         </Center>
//         <Textarea
//           placeholder="Form Description"
//           value={formDescription}
//           onChange={(e) => setFormDescription(e.target.value)}
//           mt={4}
//         />
//          <Center>
//   <VStack spacing={2} alignItems="center">
//     <Text>
//       <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Instructions:</span> Choose one of the buttons below and click on "Add a segment" to add it to the form.
//     </Text>
//     <HStack mt={4} alignItems="center">
//     <Button
//   onClick={() => {
//     addMCQ();
//     setActiveButton('MCQ');
//   }}
//   colorScheme={activeButton === 'MCQ' ? 'teal' : 'gray'} // Change 'teal' to the desired color
// >
//   Add MCQ
// </Button>
// <Button
//   onClick={() => {
//     addTextQuestion();
//     setActiveButton('TextQuestion');
//   }}
//   colorScheme={activeButton === 'TextQuestion' ? 'teal' : 'gray'} // Change 'teal' to the desired color
// >
//   Add Text Question
// </Button>
// <Button
//   onClick={() => {
//     addMediaUpload();
//     setActiveButton('MediaUpload');
//   }}
//   colorScheme={activeButton === 'MediaUpload' ? 'teal' : 'gray'} // Change 'teal' to the desired color
// >
//   Upload Media
// </Button>

//     </HStack>
//   </VStack>
// </Center>

    
//         <Divider my={4} />
//         {segments.map((segment, index) => (
//           <Box key={index} mt={4}>
//            {`${index + 1})`} 
//             {segment}
//           </Box>
//         ))}
//         <Center mt={4}>
//           <Button colorScheme="teal" size="lg" onClick={addSegment}>
//             Add Segment
//           </Button>
//         </Center>
//       </Box>
//     </Center>
//   );
// }

// export default FormPage;

import React, { useState } from "react";
import {
  Box,
  Center,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  IconButton,
  Text,
  Divider,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function FormPage() {
  const [segments, setSegments] = useState([]);
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [currentSegment, setCurrentSegment] = useState(null);
  const [activeButton, setActiveButton] = useState(null);


  const addSegment = () => {
    setSegments([...segments, currentSegment]);
  setCurrentSegment(null);
  setActiveButton(null);
  };


  const addMCQ = () => {
    setCurrentSegment(
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Textarea placeholder="Enter your MCQ question" mb={2} />
        <VStack spacing={2}>
          <Input placeholder="Option A" />
          <Input placeholder="Option B" />
          <Input placeholder="Option C" />
          <Input placeholder="Option D" />
        </VStack>
      </Box>
    );
  };

  const addTextQuestion = () => {
    setCurrentSegment(
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Textarea placeholder="Enter your text question" mb={2} />
        <Input placeholder="One-line answer" />
      </Box>
    );
  };


    const addMediaUpload = () => {
        const handleFileUpload = (e) => {
          const file = e.target.files[0]; // Get the first selected file
          if (file) {
            // Handle the uploaded file here (e.g., send it to a server, process it, etc.)
            // You can also store it in the state if needed
            console.log("Uploaded file:", file);
          }
        };
      
        // Create a hidden file input element
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".pdf, .doc, .docx, .txt"; // Define the allowed file types
        fileInput.style.display = "none";
        fileInput.addEventListener("change", handleFileUpload);
      
        setCurrentSegment(
          <Box p={4} borderWidth="1px" borderRadius="md">
            <Center>
              <IconButton
                icon={<AddIcon />}
                aria-label="Add Media"
                size="lg"
                fontSize="30px"
                width="150px"
                height="150px"
                onClick={() => {
                  // Trigger the file input when the icon is clicked
                  fileInput.click();
                }}
              />
              
            </Center>
            <Center><Text>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Upload Media</span> 
            </Text></Center>
            
          </Box>
        );
      };
      
      
  

  return (
    <Center h="100vh">
      <Box
        w="calc(100vw * 2 / 3.5)"
        p={4}
        borderWidth="1px"
        borderRadius="md"
        maxHeight="80vh" // Set a maximum height
        overflowY="auto" // Add vertical scrollbar if content overflows
      >
        <Center>
          <Input
            placeholder="Form Name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
          />
        </Center>
        <Textarea
          placeholder="Form Description"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          mt={4}
        />
         <Center>
  <VStack spacing={2} alignItems="center">
    <Text>
      <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Instructions:</span> Choose one of the buttons below and click on "Add a segment" to add it to the form.
    </Text>
    <HStack mt={4} alignItems="center">
    <Button
  onClick={() => {
    addMCQ();
    setActiveButton('MCQ');
  }}
  colorScheme={activeButton === 'MCQ' ? 'teal' : 'gray'} // Change 'teal' to the desired color
>
  Add MCQ
</Button>
<Button
  onClick={() => {
    addTextQuestion();
    setActiveButton('TextQuestion');
  }}
  colorScheme={activeButton === 'TextQuestion' ? 'teal' : 'gray'} // Change 'teal' to the desired color
>
  Add Text Question
</Button>
<Button
  onClick={() => {
    addMediaUpload();
    setActiveButton('MediaUpload');
  }}
  colorScheme={activeButton === 'MediaUpload' ? 'teal' : 'gray'} // Change 'teal' to the desired color
>
  Upload Media
</Button>

    </HStack>
  </VStack>
</Center>

    
        <Divider my={4} />
        {segments.map((segment, index) => (
          <Box key={index} mt={4}>
           {`${index + 1})`} 
            {segment}
          </Box>
        ))}
        <Center mt={4}>
          <Button colorScheme="teal" size="lg" onClick={addSegment}>
            Add Segment
          </Button>
        </Center>
      </Box>
    </Center>
  );
}

export default FormPage;

