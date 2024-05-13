import React from "react";
import { Button, Link, Text, Heading, UnorderedList, ListItem, Image, Container, Flex } from "@chakra-ui/react";

export default function Header({ ...props }) {
  return (
    <Flex {...props} pt="40px" justifyContent="center" alignItems="center" as="header">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
        px="0px"
        flexDirection={{ md: "row", base: "column" }}
        p={{ md: "", base: "20px" }}
      >
        <Flex
        display="flex"
        
        >
          <Image src="images/img_contrast.svg" h="57px" w="103px" fit="contain" />
          <Heading fontFamily="Poppins" fontSize="32px" whiteSpace="nowrap">
                  Scale In
          </Heading>
        </Flex>
        {/* <Image src="images/img_header_logo.png" h="57px" w="103px" fit="contain" /> */}
        <UnorderedList
          styleType="none"
          gap="50px"
          display="flex"
          bg="blue_gray.900_01"
          alignItems="center"
          flexWrap="wrap"
          p="10px"
          borderRadius="20px"
        >
          <ListItem>
            <Link href="#" cursor="pointer">
              <Text
                size="s"
                fontFamily="Poppins"
                p="9px"
                _hover={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  bg: "white.A700_19",
                }}
              >
                Home
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" cursor="pointer">
              <Text
                size="s"
                fontFamily="Poppins"
                mb="6px"
                p="9px"
                _hover={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  bg: "white.A700_19",
                }}
              >
                Quant Invest
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" cursor="pointer">
              <Text
                size="s"
                fontFamily="Poppins"
                p="9px"
                _hover={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  bg: "white.A700_19",
                }}
              >
                Private Club
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" cursor="pointer">
              <Text
                size="s"
                fontFamily="Poppins"
                p="9px"
                _hover={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  bg: "white.A700_19",
                }}
              >
                Affiliates
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" bg="white.A700_19" justifyContent="center" display="flex" alignItems="center">
              <Text size="s" fontFamily="Poppins" p="9px" borderRadius="10px">
                Contact Us
              </Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <Button
          colorScheme="yellow_800_01_yellow_700_01"
          fontFamily="Poppins"
          fontWeight={700}
          minW="104px"
          borderRadius="8px"
          px={{ base: "20px", sm: "" }}
        >
          Sign In
        </Button>
      </Container>
    </Flex>
  );
}
