import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowfour({
  textfour = "04",
  texthowcani = "How can I become a member of Scale-in?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" fontFamily="Montserrat" fontSize="33.1px">
          {textfour}
        </Heading>
      </Flex>
      <Flex ml={{ md: "15px", base: "0px" }} alignSelf="start">
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {texthowcani}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
