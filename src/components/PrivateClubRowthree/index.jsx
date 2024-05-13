import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowthree({
  dynamictext = "03",
  dynamictext1 = "What does Scale-in offer?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" h="41px" fontFamily="Montserrat" fontSize="33.1px" w="42px">
          {dynamictext}
        </Heading>
      </Flex>
      <Flex alignSelf="start">
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {dynamictext1}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
