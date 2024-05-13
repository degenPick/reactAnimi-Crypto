import React from "react";
import { Text, Link, Flex, UnorderedList, ListItem, Heading, Image, Box, Container } from "@chakra-ui/react";

export default function Footer({ ...props }) {
  return (
    <Flex
      {...props}
      as="footer"
      mt="-121px"
      pt={{ md: "160px", base: "20px" }}
      position="relative"
      bg="gray.900"
      alignSelf="stretch"
      justifyContent="center"
      alignItems="center"
    >
      <Container display="flex" justifyContent="center" px={{ md: "329px", base: "20px" }} p={{ md: "", base: "20px" }}>
        <Flex gap="19px" w="100%" flexDirection="column">
          <Flex gap="19px" flexDirection="column">
            <Flex
              gap="20px"
              bg="blue_gray.900_01"
              alignItems="center"
              p="10px"
              borderRadius="28px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Box
                borderColor="white.A700_0a"
                borderWidth="1px"
                borderStyle="solid"
                bg="blue_gray.900_01"
                boxShadow="sm"
                flex={1}
                p="20px"
                borderRadius="20px"
                alignSelf="stretch"
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Image src="images/img_footer_logo.png" h="57px" w="224px" fit="contain" />
                  <Box h={{ base: "1px", sm: "34px" }} bg="white.A700_66" w={{ base: "34px", sm: "1px" }} />
                  <Flex
                    bg="gray.900"
                    w={{ base: "100%", sm: "35%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    p="20px"
                    borderRadius="20px"
                  >
                    <Image src="images/img_facebook.svg" h="21px" />
                    <Image src="images/img_info.svg" h="20px" w="20px" />
                    <Image src="images/img_close.svg" h="19px" w="19px" />
                  </Flex>
                </Flex>
              </Box>
              <Flex w={{ md: "47%", base: "100%" }} flexDirection="column">
                <Heading
                  size="xs"
                  as="h6"
                  pt="1px"
                  pb="8px"
                  pr={{ base: "20px", sm: "35px" }}
                  fontFamily="Poppins"
                  borderColor="white.A700_19"
                  borderBottomWidth="1px"
                  borderStyle="solid"
                >
                  Important Links
                </Heading>
                <UnorderedList
                  styleType="none"
                  pt="7px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                >
                  <ListItem>
                    <Link href="#">
                      <Flex>
                        <Text size="s" color="blue_gray.300_01">
                          Contact Us
                        </Text>
                      </Flex>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Flex>
                        <Text size="s" color="blue_gray.300_01">
                          Quant Invest
                        </Text>
                      </Flex>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Flex alignSelf="start">
                        <Text size="s" color="blue_gray.300_01">
                          Private Club
                        </Text>
                      </Flex>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <Flex alignSelf="end">
                        <Text size="s" color="blue_gray.300_01">
                          Blogs
                        </Text>
                      </Flex>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
            <UnorderedList
              styleType="none"
              display="flex"
              justifyContent="space-between"
              gap="20px"
              px={{ base: "20px", sm: "30px" }}
            >
              <ListItem>
                <Link href="#">
                  <Flex>
                    <Text size="s" color="blue_gray.300_01" textDecoration="underline">
                      Terms & Conditions
                    </Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Flex>
                    <Text size="s" color="blue_gray.300_01" textDecoration="underline">
                      Disclaimer
                    </Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Flex>
                    <Text size="s" color="blue_gray.300_01" textDecoration="underline">
                      Documentation
                    </Text>
                  </Flex>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Text
            size="xs"
            color="blue_gray.300_01"
            pt="22px"
            pb="35px"
            borderColor="white.A700_19"
            borderTopWidth="1px"
            borderStyle="solid"
            px="35px"
            p={{ base: "20px", sm: "" }}
          >
            <Text size="xs" as="span" color="blue_gray.300_01">
              Copyright © 2017 - 2024&nbsp;
            </Text>
            <Text size="xs" as="span" color="blue_gray.300_01" textTransform="uppercase">
              Scale-in&nbsp;
            </Text>
            <Text size="xs" as="span" color="blue_gray.300_01">
              -&nbsp;
            </Text>
            <Text size="xs" as="span" color="blue_gray.300_01" textTransform="capitalize">
              All Rights Reserved
            </Text>
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
