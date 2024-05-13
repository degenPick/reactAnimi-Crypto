import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowfive({
  textfive = "05",
  textisscalein = "Is Scale-in open to investors worldwide?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" h="41px" fontFamily="Montserrat" fontSize="33.1px" w="42px">
          {textfive}
        </Heading>
      </Flex>
      <Flex>
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {textisscalein}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
