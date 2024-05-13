import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowseven({
  textseven = "07",
  textwhatisthe = "What is the minimum investment required to join Scale-in?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" fontFamily="Montserrat" fontSize="33.1px">
          {textseven}
        </Heading>
      </Flex>
      <Flex ml={{ md: "15px", base: "0px" }}>
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {textwhatisthe}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
