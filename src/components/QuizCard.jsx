import React from "react";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

const QuizCard = ({ question, options, onOptionChange, selectedOption }) => {
  const handleOptionChange = (e) => {
    onOptionChange(e.target.value);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Heading as="h3" size="lg" mb={4}>
        {question}
      </Heading>
      <Stack spacing={2}>
        {options.map((option) => (
          <Box key={option}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <Text as="span" ml={2}>
              {option}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default QuizCard;
