import { Box, Button, Heading, ScaleFade, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { QuizContext } from "../contexts/QuizContext";

const Score = ({ score, timeTaken, startQuiz }) => {
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const percentage = (score * 100) / 10;
  const remarks = percentage >= 50 ? "Passed" : "Failed";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <Box
        bg="white"
        rounded="lg"
        boxShadow="lg"
        maxW="2xl"
        mx="auto"
        p={6}
        my={12}
      >
        <Heading textAlign={"center"} as="h2" size="xl" mb={4}>
          Quiz Results: {`${remarks} (${percentage}%)`}
        </Heading>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box textAlign="center" mb={{ base: 4, md: 0 }}>
            <Text fontSize="2xl" mb={2}>
              Score
            </Text>
            <Text fontSize="3xl">{score}/10</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="2xl" mb={2}>
              Time Taken
            </Text>
            <Text fontSize="3xl">
              {minutes} min {seconds} sec
            </Text>
          </Box>
        </Box>
        <Box mt={3} display={"flex"} justifyContent="center">
          <Button onClick={startQuiz}>Try Again</Button>
        </Box>
      </Box>
    </motion.div>
  );
};

const Result = () => {
  const [isResultsHide, setIsResultsHide] = useState(true);
  const { score, time, startQuiz } = useContext(QuizContext);

  return (
    <>
      {isResultsHide ? (
        <ScaleFade initialScale={0.9} in={isResultsHide}>
          <Box
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            w="100%"
            h="100vh"
            p={8}
            borderRadius="md"
            textAlign="center"
          >
            <Heading size="xl" mb={4} color="white">
              Congratulations!
            </Heading>
            <Text fontSize="lg" color="white">
              You have successfully submitted the quiz.
            </Text>
            <Box mt={6}>
              <Button
                onClick={() => setIsResultsHide(false)}
                colorScheme="yellow"
              >
                Check Results
              </Button>
            </Box>
          </Box>
        </ScaleFade>
      ) : (
        <Score score={score} startQuiz={startQuiz} timeTaken={120 - time} />
      )}
    </>
  );
};

export default Result;
