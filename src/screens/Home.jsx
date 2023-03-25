import React, { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { BiTimeFive } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import { QuizContext } from "../contexts/QuizContext";

const Home = ({ onStart }) => {
  const { startQuiz } = useContext(QuizContext);
  return (
    <Container maxW="container.sm">
      <Box borderWidth="1px" mt={5} borderRadius="lg" p={6} textAlign="center">
        <Image
          src="/quiz-logo.jpg"
          alt="Quiz Logo"
          boxSize="150px"
          mx="auto"
          mb={6}
        />

        <Heading as="h1" size="xl" mb={4}>
          Welcome to the Quiz!
        </Heading>
        <Text fontSize="xl" mb={6}>
          Test your knowledge with 10 multiple choice questions.
        </Text>

        <Stack direction={["column", "row"]} spacing={4}>
          <Box
            w={["100%", "50%"]}
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <GrScorecard />
            <Text>50% passing percentage</Text>
          </Box>

          <Box
            w={["100%", "50%"]}
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <BiTimeFive />
            <Text>Time Limit: 2 mins</Text>
          </Box>
        </Stack>

        <Button colorScheme="blue" size="lg" mt={8} onClick={startQuiz}>
          Start Quiz
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
