import React from "react";
import { Heading, Text, Link, Flex, Box, Container } from "@chakra-ui/react";

export default function QuantInvestRowsignup({
  signuptext = "Sign Up",
  createaccounttext = "Create your account & deposit USDT on your preferred  centralized exchange",
  frame = "01",
  ...props
}) {
  return (
    <Container {...props} display="flex" justifyContent="flex-end" alignItems="center" px="0px">
      <Box
        h="191px"
        pt="16px"
        pb={{ base: "20px", sm: "40px" }}
        pl={{ base: "20px", sm: "40px" }}
        pr="16px"
        borderColor="gray.900"
        borderWidth="2px"
        borderStyle="solid"
        bg="blue_gray.900"
        boxShadow="md"
        w="33%"
        position="relative"
        borderRadius="16px"
      >
        <Flex
          gap="13px"
          w="95%"
          flexDirection="column"
          alignItems="start"
          position="absolute"
          bottom="21%"
          left="8%"
          m="auto"
        >
          <Link href="#">
            <Heading size="lg" as="h4" letterSpacing="0.43px" fontSize="24px">
              {signuptext}
            </Heading>
          </Link>
          <Text size="2xl" color="blue_gray.300" fontFamily="Catamaran" w="100%" lineHeight="29px">
            {createaccounttext}
          </Text>
        </Flex>
        <Heading
          size="2xl"
          color="transparent"
          fontSize="32px"
          bgGradient="linear-gradient(323deg, #f69522,#fbb532)"
          bg="gray.900"
          w="54px"
          justifyContent="center"
          display="flex"
          alignItems="center"
          position="absolute"
          right="16.00px"
          top="16.00px"
          m="auto"
          borderRadius="10px"
          sx={{ "background-clip": "text", "text-shadow": "0px 0px 12px #00000019" }}
        >
          {frame}
        </Heading>
      </Box>
    </Container>
  );
}
