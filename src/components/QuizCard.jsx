import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { QuizContext } from "../contexts/QuizContext";

const QuizCard = ({ question, options, onOptionChange, selectedOption }) => {
  const { time } = useContext(QuizContext);

  const handleOptionChange = (value) => {
    onOptionChange(value);
  };

  return (
    <Box p={4}>
      <Text mt={3} mb={8} textAlign={"right"}>
        Time Left: {time}s
      </Text>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading as={"h3"} size={{ base: "md", md: "lg" }} mb={4}>
          {question}
        </Heading>
        <RadioGroup onChange={handleOptionChange} value={selectedOption}>
          <Stack direction="column" gap={2}>
            {options.map((option) => (
              <Box
                key={option}
                backgroundColor={
                  option === selectedOption ? "green.200" : "white"
                }
                boxShadow="sm"
                border={1}
                borderStyle="solid"
                borderRadius={5}
              >
                <Radio p={3} w="full" value={option}>
                  {option}
                </Radio>
              </Box>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default QuizCard;
