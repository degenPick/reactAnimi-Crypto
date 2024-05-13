import React from "react";
import { Image, Heading, Flex, AccordionButton } from "@chakra-ui/react";

export default function PrivateClubRowsix({
  headingtext = "06",
  subheadingtext = "How does Scale-in ensure the security of its members investments?",
  ...props
}) {
  return (
    <AccordionButton {...props}>
      <Flex flexDirection="column" py="4px">
        <Heading size="xl" fontFamily="Montserrat" fontSize="33.1px">
          {headingtext}
        </Heading>
      </Flex>
      <Flex ml={{ md: "15px", base: "0px" }}>
        <Heading size="md" as="h3" fontFamily="Poppins" fontSize="28px">
          {subheadingtext}
        </Heading>
      </Flex>
    </AccordionButton>
  );
}
