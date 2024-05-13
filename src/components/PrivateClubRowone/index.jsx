import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowone({ textone = "01", textwhatisscale = "What is Scale-in?", ...props }) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" fontFamily="Montserrat" fontSize="33.1px">
          {textone}
        </Heading>
      </Flex>
      <Flex alignSelf="start">
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {textwhatisscale}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
