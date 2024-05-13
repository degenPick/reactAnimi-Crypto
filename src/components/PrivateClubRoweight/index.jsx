import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRoweight({
  numbertext = "08",
  questiontext = "Can I cancel my membership with Scale-in?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" fontFamily="Montserrat" fontSize="33.1px">
          {numbertext}
        </Heading>
      </Flex>
      <Flex ml={{ md: "15px", base: "0px" }}>
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {questiontext}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
