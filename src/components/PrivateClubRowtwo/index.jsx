import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowtwo({
  texttwo = "02",
  textwhenwasscale = "When was Scale-in established?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" h="41px" fontFamily="Montserrat" fontSize="33.1px" w="42px">
          {texttwo}
        </Heading>
      </Flex>
      <Flex alignSelf="start">
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {textwhenwasscale}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
