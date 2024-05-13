import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { SelectBox } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuantInvestRowsignup from "../components/QuantInvestRowsignup";
import {
  Box,
  Container,
  Button,
  Input,
  Flex,
  Image,
  Text,
  Heading,
  Textarea,
  AbsoluteCenter,
  AccordionButton,
  Accordion,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa"; // Import the necessary icons
import anime from 'animejs';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function PrivateClubPage() {

  const [activeTab, setActiveTab] = useState(1);
  const textRef = useRef(null);
  const strategyTextsRef = useRef(null);

  const texts = ['Make Money', 'Save Time'];
  const strategyTexts = ['Simplified', 'Automated', 'Optimized', 'Transparent'];
  const strategyTextColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33EC'];
  let currentIndex = 0;
  let strategyCurrentIndex = 0;

  const animateText = (textArray, textIndex, textRef, textColors) => {

    const defaultColor = '#FFFFFF';

    if (!textRef.current) return;

    anime({
      targets: textRef.current,
      translateY: [
        { value: 30, duration: 800, easing: 'easeInOutQuad' },
      ],
      opacity: [
        { value: 0, duration: 100 },
        { value: 1, duration: 100 },
      ],
      color: textColors ? textColors[textIndex] : defaultColor,
      complete: () => {
        setTimeout(() => {
          if (!textRef.current) return;
          anime({
            targets: textRef.current,
            translateY: [
              { value: 0, duration: 800, easing: 'easeInOutQuad' },
            ],
            opacity: [
              { value: 1, duration: 100 },
              { value: 0, duration: 100 },
            ],
            complete: () => {
              textIndex = (textIndex + 1) % textArray.length;
              textRef.current.innerText = textArray[textIndex];
              animateText(textArray, textIndex, textRef, textColors);
            },
          });
        }, 1000);
      },
    });
  };

  useEffect(() => {
    animateText(texts, currentIndex, textRef, null);
    return () => {
      anime.remove(textRef.current);
    };
  }, []);

  useEffect(() => {
    animateText(strategyTexts, strategyCurrentIndex, strategyTextsRef, strategyTextColors);
    return () => {
      anime.remove(strategyTextsRef.current);
    };
  }, []);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    const tabElements = document.querySelectorAll('.tab-heading');
    let currentIndex = 0;

    const animateTabs = () => {
      anime({
        targets: tabElements[currentIndex],
        borderBottomWidth: ['0px', '5px'],
        borderColor: '#f8a329',
        easing: 'linear',
        duration: 300,
        complete: () => {
          setTimeout(() => {
            anime({
              targets: tabElements[currentIndex],
              borderBottomWidth: ['5px', '0px'],
              borderColor: 'transparent',
              easing: 'linear',
              duration: 300,
              complete: () => {
                currentIndex = (currentIndex + 1) % tabElements.length; // Move to the next tab
                animateTabs(); // Restart the animation for the next tab
                setActiveTab(currentIndex + 1); // Activate the next tab
              },
            });
          }, 2000); // Wait for 2 seconds before opening the next tab
        },
      });
    };

    animateTabs();

    return () => {
      anime.remove(tabElements);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Join the Private Club at Scale-in - Exclusive Financial Success</title>
        <meta
          name="description"
          content="Become a member of the Private Club at Scale-in and build your financial success story. Get expert investment advice, market analysis, and secure your investments with our exclusive community."
        />
      </Helmet>

      {/* main layout section */}
      <Box bg="gray.900" w="100%">
        <Flex flexDirection="column" alignItems="center">
          <Box alignSelf="stretch">
            {/* navigation section */}
            <Box
              h={{ md: "1020px", base: "auto" }}
              bgImage="url(/images/img_frame_1000004947.png)"
              bgSize="cover"
              bgRepeat="no-repeat"
            >
              <Header pt={{ base: "20px", sm: 0 }} />

              {/* hero section */}
              {/* HERO SECTION START */}

              <Flex
                gap="40px"
                alignItems="center"
                py={{ md: "120px", base: "20px" }}
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  h="680px"
                  borderTopRightRadius="40px"
                  borderBottomRightRadius="40px"
                  gap="46px"
                  bgColor="rgba(34,41,69,255)"
                  flex={1}
                  flexDirection="column"
                  alignSelf="stretch"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex gap="20px" position="relative" w={{ md: "100%", base: "100%" }} alignItems="center">
                    <Flex
                      pt="12px"
                      pb="11px"
                      transform="rotate(-90deg)"
                      // bg="gray.900"
                      w="50%"
                      flexDirection="column"
                      alignItems="center"
                      // px="12px"
                      borderRadius="10px"
                    >
                      <Heading fontFamily="Poppins" fontSize="32px" whiteSpace="nowrap">
                        Quant Invest
                      </Heading>
                    </Flex>
                    <Flex flexDirection="column">
                      <Box bg="gray.900" p="17px" borderRadius="47px" mb="15px">
                        <Image src="images/img_group.png" h="60px" w="60px" />
                      </Box>
                      <Box bg="gray.900" p="17px" borderRadius="47px" mb="15px">
                        <Image src="images/img_group.png" h="60px" w="60px" />
                      </Box>
                      <Box bg="gray.900" p="17px" borderRadius="47px" mb="15px">
                        <Image src="images/img_group.png" h="60px" w="60px" />
                      </Box>
                      <Box bg="gray.900" p="17px" borderRadius="47px" mb="15px">
                        <Image src="images/img_group.png" h="60px" w="60px" />
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex bg="gray.900" w={{ md: "68%", base: "100%" }} borderRadius="40px">
                  <Flex gap="23px" w="100%" flexDirection={{ md: "row", base: "column" }}>
                    <Flex w={{ md: "44%", base: "100%" }} flexDirection="column">
                      <Image src="images/img_ellipse_20.png" h="279px" zIndex={2} w="91%" position="relative" />
                      <Flex mt="-125px" position="relative" flexDirection="column" alignItems="end">
                        <Flex
                          mr={{ md: "7px", base: "0px" }}
                          gap="20px"
                          zIndex={1}
                          w={{ md: "89%", base: "100%" }}
                          position="relative"
                          flexDirection="column"
                        >
                          <Image src="images/img_contrast.svg" h="82px" w="82px" />
                          <Flex flexDirection="column">
                            <Flex
                              gap="20px"
                              p="10px"
                            >
                              <Text size="4xl" as="h1" fontWeight={700} fontFamily="Poppins" fontSize="60px" ref={textRef}>
                                Make Money
                              </Text>
                            </Flex>
                            <Heading
                              size="2xl"
                              as="h1"
                              color="gray.400_01"
                              mt="-3px"
                              fontFamily="Poppins"
                              textTransform="capitalize"
                              fontSize="42px"
                              position="relative"
                              lineHeight="63px"
                            >
                              Join us to build your financial success story
                            </Heading>
                          </Flex>
                        </Flex>
                        <Box
                          h="172px"
                          mt="-18px"
                          position="relative"
                          bg="white.A700_0f"
                          alignSelf="stretch"
                          borderRadius="275px"
                          sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(268.00px)" }}
                        />
                      </Flex>
                    </Flex>
                    <Box
                      h="680px"
                      flex={{ md: 1, base: "unset" }}
                      position="relative"
                      w={{ md: "auto", base: "100%" }}
                      alignSelf="stretch"
                    >
                      <Flex
                        gap={{ md: "160px", base: "80px", sm: "120px" }}
                        w="70%"
                        flexDirection="column"
                        alignItems="end"
                        position="absolute"
                        right="0.24px"
                        bottom="0px"
                        top="0px"
                        h="max-content"
                        my="auto"
                      >
                        <Image src="images/img_ellipse_22.png" h="254px" w="81%" />
                        <Image src="images/img_ellipse_21.png" h={{ md: "265px", base: "auto" }} w="100%" />
                      </Flex>
                      <Image
                        src="images/img_group_1821.svg"
                        h="410px"
                        w="92%"
                        position="absolute"
                        left="0.00px"
                        bottom="0px"
                        top="0px"
                        my="auto"
                      />
                    </Box>
                  </Flex>
                </Flex>
                <Flex
                  h="680px"
                  borderTopLeftRadius="40px"
                  borderBottomLeftRadius="40px"
                  gap="46px"
                  bgColor="rgba(34,41,69,255)"
                  flex={1}
                  flexDirection="column"
                  alignSelf="stretch"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex gap="20px" pl="20px" position="relative" w="100%" alignItems="center">
                    <Box bg="gray.900" p="17px" borderRadius="47px">
                      <Image src="images/img_group.png" h="60px" w="60px" />
                    </Box>
                    <Flex
                      pt="12px"
                      pb="11px"
                      transform="rotate(-90deg)"
                      w="50%"
                      flexDirection="column"
                      alignItems="center"
                      px="2px"
                      borderRadius="10px"
                    >
                      <Heading fontFamily="Poppins" fontSize="32px" whiteSpace="nowrap">
                        Private Club
                      </Heading>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              {/* HERO SECTION END */}

            </Box>

            {/* ABOUT US HEADING START */}
            <Flex bg="gray.900" justifyContent="center" >
              <Flex
                w="91%"
                maxW="1680px"
                pl="20px"
                pr={{ base: "20px", sm: "40px" }}
                borderWidth="1px"
                borderStyle="solid"
                bgGradient="linear-gradient(180deg, #ffffff4c,#ffffff00)"
                boxShadow="md"
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="center"
                gap="50px"
                py="20px"
                borderRadius="20px"
                sx={{ "border-image": "linear-gradient(to right #ffffff4c,#ffffff00) 1" }}
              >
                <Button
                  size="md"
                  variant="fill"
                  fontFamily="Poppins"
                  fontWeight={700}
                  minW="301px"
                  borderRadius="16px"
                >
                  About Us
                </Button>
                <Image src="images/img_contrast.svg" h="57px" w="56px" />
              </Flex>
            </Flex>
            {/* ABOUT US HEADING END */}

            {/* ABOUT US SECTION START */}

            <Flex bg="#1c223c" justifyContent="center" >
              <Flex
                mt="70px"
                mb="70px"
                w="91%"
                maxW="1680px"
                pl="20px"
                pr={{ base: "20px", sm: "40px" }}
                boxShadow="md"
                alignSelf="stretch"
                gap="50px"
                py="20px"
                borderRadius="20px"
                bg="#141a36"

              >
                <Flex
                  alignItems="center"
                  gap="20px"
                  w="100%"
                >
                  <Image src="images/img_ellipse_2040_2.png" h="207px" w="207px" />
                  <Flex
                    flexDirection="column"
                    w="30%"
                  >
                    <Heading size="lg" as="h5" letterSpacing="0.50px" textTransform="capitalize" fontSize="24px">
                      Mohammad Ghanay
                    </Heading>
                    <Text>
                      Founder & CEO
                    </Text>
                    <Image src="images/img_ellipse_2040_2.png" h="37px" w="37px" />

                  </Flex>
                  <Flex bg="#1c223c"
                    flexDirection="column"
                    w="70%"
                    borderRadius="15px"
                    gap="20px"
                  >
                    <Flex
                      gap='30px'
                      w="100%"
                      display="flex"
                      justifyContent="center"
                      p="20px"
                      borderBottom="1px solid grey"
                    >
                      {/* Tab 1 */}
                      <Heading
                        onClick={() => handleTabClick(1)}
                        size="lg" as="h5"
                        letterSpacing="0.50px"
                        textTransform="capitalize"
                        fontSize="24px"
                        borderBottom={activeTab === 1 ? '5px solid #f8a329' : 'none'}
                        className="tab-heading"
                      >
                        Team & History
                      </Heading>

                      {/* Tab 2 */}
                      <Heading
                        onClick={() => handleTabClick(2)}
                        size="lg" as="h5"
                        letterSpacing="0.50px"
                        textTransform="capitalize"
                        fontSize="24px"
                        borderBottom={activeTab === 2 ? '5px solid #f8a329' : 'none'}
                        className="tab-heading"
                      >
                        Our Mission
                      </Heading>

                      {/* Tab 3 */}
                      <Heading
                        onClick={() => handleTabClick(3)}
                        size="lg" as="h5"
                        letterSpacing="0.50px"
                        textTransform="capitalize"
                        fontSize="24px"
                        borderBottom={activeTab === 3 ? '5px solid #f8a329' : 'none'}
                        className="tab-heading"
                      >
                        Our Vision
                      </Heading>

                    </Flex>
                    <Flex
                      display="flex"
                      justifyContent="center"
                    >
                      {/* Paragraphs */}
                      <Box padding="20px">
                        {/* Paragraph 1 */}
                        {activeTab === 1 && (
                          <Text color="#fff" fontSize="27px">
                            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;
                          </Text>
                        )}

                        {/* Paragraph 2 */}
                        {activeTab === 2 && (
                          <Text color="#fff" fontSize="27px">
                            &quot;Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
                          </Text>
                        )}

                        {/* Paragraph 3 */}
                        {activeTab === 3 && (
                          <Text color="#fff" fontSize="27px">
                            &quot;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;
                          </Text>
                        )}
                      </Box>
                    </Flex>

                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/* ABOUT US SECTION END */}



            {/* about quant invest section start */}
            <Box h="1804px" bg="gray.900" position="relative">
              <Container
                gap="49px"
                display="flex"
                flexDirection="column"
                position="absolute"
                left="0px"
                bottom="0px"
                right="0px"
                top="0px"
                h="max-content"
                px="0px"
                my="auto"
                p={{ md: "", base: "20px" }}
              >
                <Flex
                  pl="20px"
                  pr={{ base: "20px", sm: "40px" }}
                  borderWidth="1px"
                  borderStyle="solid"
                  bgGradient="linear-gradient(180deg, #ffffff4c,#ffffff00)"
                  boxShadow="md"
                  alignSelf="stretch"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="50px"
                  py="20px"
                  borderRadius="20px"
                  sx={{ "border-image": "linear-gradient(to right #ffffff4c,#ffffff00) 1" }}
                  w="100%"
                  maxW="1680px"
                >
                  <Button
                    size="md"
                    variant="fill"
                    fontFamily="Poppins"
                    fontWeight={700}
                    minW="301px"
                    borderRadius="16px"
                  >
                    Quant Invest
                  </Button>
                  <Image src="images/img_contrast.svg" h="57px" w="56px" />


                </Flex>
                <Flex gap="9px" flexDirection="column" alignItems="center">
                  <Heading fontSize="28px">Our Streamlined Investment Solution</Heading>
                  <Text
                    size="2xl"
                    color="blue_gray.300"
                    fontFamily="Catamaran"
                    textAlign="center"
                    w="100%"
                    lineHeight="29px"
                  >
                    Quant Invest is a cutting-edge automated and optimized crypto investment solution that utilizes our
                    custom-designed quantitative algorithm 24/7. With this innovative technology, you can enjoy the
                    benefits of crypto investment without the hassle of manual monitoring and effort. Our algorithm
                    constantly analyzes the market trends, identifies long-term opportunities and optimizes your
                    portfolio.
                  </Text>
                </Flex>
                <Flex gap="20px" flexDirection="column">
                  <Flex gap="20px" flexDirection={{ md: "row", base: "column" }}>
                    <Box bg="blue_gray.900_02" w={{ md: "28%", base: "100%" }} borderRadius="16px">
                      <Box>
                        <Flex
                          pt={{ md: "42px", base: "42px", sm: "20px" }}
                          pb="37px"
                          borderColor="white.A700_19"
                          borderBottomWidth="1px"
                          borderStyle="solid"
                          bg="blue_gray.900_03"
                          boxShadow="3xl"
                          px="40px"
                          p={{ base: "20px", sm: "" }}
                        >
                          <Heading size="lg" as="h3" letterSpacing="0.43px" textTransform="capitalize" fontSize="24px">
                            Strategy
                          </Heading>
                        </Flex>
                        <Box h={{ md: "526px", base: "auto" }} position="relative">
                          <Image src="images/img_group_1825.png" h="533px" w="94%" />
                          <AbsoluteCenter
                            pt="20px"
                            pb={{ base: "20px", sm: "40px" }}
                            gap={{ base: "34px", sm: "69px" }}
                            w="100%"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            h="max-content"
                            px="20px"
                            m="auto"
                          >
                            <Text
                              size="2xl"
                              color="blue_gray.300"
                              fontFamily="Catamaran"
                              w={{ md: "91%", base: "100%" }}
                              lineHeight="29px"
                            >
                              Our trend-following strategy is designed to capitalize on market upswings and protect your
                              capital during downturns. Emphasizing quality over quantity, our algorithm executes an
                              average of 40 orders per year.
                            </Text>
                            <Button
                              size="2xl"
                              colorScheme="gray_900_99"
                              color="transparent"
                              fontWeight={700}
                              color="#fff"
                              bg="#1c223c"
                              borderWidth="1px"
                              borderStyle="solid"
                              minW="384px"
                              p="15px"
                              borderRadius="16px"
                              px={{ base: "20px", sm: "" }}
                              gap="20px"
                            >
                              <Text mt="-20px" mb='35px' fontSize="25px" fontWeight={500} ref={strategyTextsRef}>
                                Simplified
                              </Text>
                            </Button>
                            <Flex gap="2px" w={{ md: "91%", base: "100%" }} flexDirection="column" alignItems="start">
                              <Heading size="xs" as="h4">
                                Want to know more about our performance?{" "}
                              </Heading>
                              <Flex gap="4px" alignSelf="stretch" flexDirection="column" alignItems="start">
                                <Text size="s" color="lightgray">
                                  Download our detailed report
                                </Text>
                                <Flex
                                  alignSelf="stretch"
                                  borderRadius="8px"
                                  flexDirection={{ base: "column", sm: "row" }}
                                >
                                  <Input
                                    placeholder={`Your Email Address`}
                                    type="email"
                                    fontWeight={600}
                                    flexGrow={1}
                                    pr={{ base: "20px", sm: 0 }}
                                    p={{ base: "20px", sm: "" }}
                                  />
                                  <Button
                                    size="50px"
                                    variant="gradient"
                                    colorScheme="yellow_800_02_yellow_700"
                                    fontWeight={700}
                                    minW="113px"
                                    borderRadius="5px"
                                    p={{ base: "20px", sm: "" }}
                                    px={{ base: "20px", sm: "" }}
                                  >
                                    Receive
                                  </Button>
                                </Flex>
                              </Flex>
                            </Flex>
                          </AbsoluteCenter>
                        </Box>
                      </Box>
                    </Box>
                    <Flex
                      pb="20px"
                      gap="10px"
                      bg="blue_gray.900_02"
                      flex={1}
                      flexDirection="column"
                      alignItems="center"
                      borderRadius="18px"
                      alignSelf="stretch"
                    >
                      <Flex
                        pt="39px"
                        pb="40px"
                        alignSelf="stretch"
                        borderColor="white.A700_19"
                        borderBottomWidth="1px"
                        borderStyle="solid"
                        bg="blue_gray.900_02"
                        boxShadow="3xl"
                        px="40px"
                        p={{ base: "20px", sm: "" }}
                      >
                        <Heading size="lg" as="h5" letterSpacing="0.50px" textTransform="capitalize" fontSize="24px">
                          Quant Invest Performance Since 2017
                        </Heading>
                      </Flex>
                      <Flex
                        gap="19px"
                        w={{ md: "93%", base: "100%" }}
                        flexDirection="column"
                        alignItems="center"
                        p={{ md: "", base: "20px" }}
                      >
                        <Flex
                          alignSelf="stretch"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="20px"
                          flexDirection={{ md: "row", base: "column" }}
                        >
                          <Flex gap={{ md: "88px", base: "44px", sm: "66px" }} flexDirection="column" alignItems="start">
                            <Text letterSpacing="0.50px" fontSize="14.14px" alignSelf="center">
                              6.000
                            </Text>
                            <Text letterSpacing="0.50px" fontSize="14.14px" alignSelf="center">
                              5.000
                            </Text>
                            <Text letterSpacing="0.50px" fontSize="14.14px" alignSelf="end">
                              4000
                            </Text>
                            <Text letterSpacing="0.50px" fontSize="14.14px" alignSelf="end">
                              3000
                            </Text>
                            <Text letterSpacing="0.50px" fontSize="14.14px" alignSelf="end">
                              2000
                            </Text>
                          </Flex>
                          <Box
                            h="459px"
                            flex={{ md: 1, base: "unset" }}
                            position="relative"
                            w={{ md: "auto", base: "100%" }}
                            alignSelf="stretch"
                          >
                            <Image
                              src="images/img_grid_base.png"
                              h="459px"
                              w="100%"
                              position="absolute"
                              left="0px"
                              bottom="0px"
                              right="0px"
                              top="0px"
                              m="auto"
                            />
                            <Image
                              src="images/img_path_0_185x1058.png"
                              h="185px"
                              w="100%"
                              position="absolute"
                              bottom="18%"
                              right="0px"
                              left="0px"
                              m="auto"
                            />
                            <Image
                              src="images/img_path_1_224x1058.png"
                              h="224px"
                              w="100%"
                              position="absolute"
                              bottom="20%"
                              right="0px"
                              left="0px"
                              m="auto"
                            />
                            <Image
                              src="images/img_path_3_304x1057.png"
                              h="304px"
                              w="100%"
                              position="absolute"
                              top="13%"
                              right="0px"
                              left="0px"
                              m="auto"
                            />
                            <Flex
                              w="18%"
                              justifyContent="flex-end"
                              position="absolute"
                              right="0.40px"
                              top="2.35px"
                              m="auto"
                            >
                              <Flex w="100%" justifyContent="flex-end" alignItems="start">
                                <Flex w="35%" justifyContent="flex-end" px="9px" py="11px" borderRadius="16px">
                                  <Box h="9px" bg="lime.800" w="9px" borderRadius="4px" />
                                </Flex>
                                <Text mt="6px" letterSpacing="0.50px" fontSize="14.14px" fontWeight={500}>
                                  SCALE IN
                                </Text>
                              </Flex>
                              <Flex
                                gap="14px"
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                                p="7px"
                                borderRadius="16px"
                              >
                                <Box h="9px" alignSelf="end" bg="light_blue.300" w="9px" borderRadius="4px" />
                                <Text letterSpacing="0.50px" fontSize="14.14px" fontWeight={500}>
                                  BTC
                                </Text>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                        <Flex gap="46px" flexWrap="wrap">
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            10:59PM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            11:59PM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            12:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            1:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            2:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            3:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            4:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            5:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            6:59AM
                          </Text>
                          <Text letterSpacing="0.50px" fontSize="14.14px">
                            7:59AM
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex gap="20px" flexDirection="column">
                    <Flex
                      pt="38px"
                      pb="40px"
                      gap="38px"
                      bg="blue_gray.900_02"
                      flexDirection="column"
                      px="38px"
                      borderRadius="16px"
                      p={{ base: "20px", sm: "" }}
                    >
                      <Flex
                        pl="507px"
                        pr="506px"
                        gap="2px"
                        flexDirection="column"
                        alignItems="center"
                        px={{ md: "", base: "20px" }}
                      >
                        <Heading
                          size="xs"
                          as="h6"
                          color="amber.A400"
                          fontFamily="Catamaran"
                          textTransform="uppercase"
                          fontWeight={700}
                        >
                          PRocess
                        </Heading>
                        <Heading size="lg" as="h4" fontSize="24px">
                          Delegate Your Digital Asset Management Easily
                        </Heading>
                      </Flex>
                      <QuantInvestRowsignup />
                    </Flex>
                    <Box
                      pt="31px"
                      pb="40px"
                      bg="blue_gray.900_02"
                      px="31px"
                      borderRadius="16px"
                      p={{ base: "20px", sm: "" }}
                    >
                      <Flex
                        justifyContent="space-between"
                        alignItems="end"
                        gap="20px"
                        flexDirection={{ md: "row", base: "column" }}
                      >
                        <Flex gap="8px" w={{ md: "12%", base: "100%" }} justifyContent="center" alignItems="center">
                          <Image src="images/img_close_blue_gray_600.png" h="25px" w="24px" />
                          <Image src="images/img_path16.png" h="24px" w="87%" />
                        </Flex>
                        <Image src="images/img_vector.svg" h="39px" w={{ md: "12%", base: "100%" }} />
                        <Flex gap="6px" w={{ md: "10%", base: "100%" }} justifyContent="center">
                          <Image src="images/img_settings.svg" h="23px" />
                          <Image src="images/img_vector_blue_gray_600.svg" h="23px" w="80%" />
                        </Flex>
                        <Flex gap="8px" w={{ md: "11%", base: "100%" }} justifyContent="center">
                          <Image src="images/img_user_blue_gray_600.svg" h="27px" />
                          <Image src="images/img_group_1000003266.svg" h="27px" w="84%" />
                        </Flex>
                        <Image src="images/img_g886.svg" h="29px" w={{ md: "7%", base: "100%" }} />
                        <Image src="images/img_settings_blue_gray_600.svg" h="32px" w={{ md: "6%", base: "100%" }} />
                      </Flex>
                    </Box>
                    <Box h={{ md: "122px", base: "auto" }} bg="blue_gray.900_02" position="relative" borderRadius="16px">
                      <Heading as="h3" fontSize="28px">
                        <Heading as="span" color="white.A700" fontWeight={400}>
                          This exclusive opportunity targets
                        </Heading>
                        <Heading as="span" color="white.A700">
                          &nbsp;passive investors&nbsp;
                        </Heading>
                        <Heading as="span" color="white.A700" fontWeight={400}>
                          demanding&nbsp;
                        </Heading>
                        <Heading as="span" color="white.A700">
                          zero time working
                        </Heading>
                        <Heading as="span" color="white.A700" fontWeight={400}>
                          , as everything is automated
                        </Heading>
                      </Heading>
                      <Image
                        src="images/img_partenrs_bg_png.png"
                        h="122px"
                        w="100%"
                        position="absolute"
                        left="0px"
                        bottom="0px"
                        right="0px"
                        top="0px"
                        m="auto"
                        borderRadius="16px"
                      />
                    </Box>
                  </Flex>
                </Flex>
              </Container>
            </Box>

            {/* about quant invest section end */}


            {/* faq section */}

            {/* FAQ HEADING START */}
            <Flex bg="gray.900" justifyContent="center" >
              <Flex
                w="91%"
                maxW="1680px"
                pl="20px"
                pr={{ base: "20px", sm: "40px" }}
                borderWidth="1px"
                borderStyle="solid"
                bgGradient="linear-gradient(180deg, #ffffff4c,#ffffff00)"
                boxShadow="md"
                alignSelf="stretch"
                justifyContent="space-between"
                alignItems="center"
                gap="50px"
                py="20px"
                borderRadius="20px"
                sx={{ "border-image": "linear-gradient(to right #ffffff4c,#ffffff00) 1" }}
              >
                <Button
                  size="md"
                  variant="fill"
                  fontFamily="Poppins"
                  fontWeight={700}
                  minW="501px"
                  borderRadius="16px"
                >
                  Frequently Asked Questions
                </Button>
                <Image src="images/img_contrast.svg" h="57px" w="56px" />
              </Flex>
            </Flex>
            {/* FAQ HEADING END */}

            <Flex
              bg="gray.900"
              justifyContent="center"
            // py={{ md: "80px", base: "20px" }}
            >
              <Accordion
                // defaultIndex={[1]}
                gap="30px"
                display="flex"
                w="100%"
                flexDirection="column"
                maxW="1680px"
                mx="auto"
                p={{ md: "", base: "20px" }}
              >
                {[...Array(10)].map((_, index) => (
                  <AccordionItem key={index}>
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          pl="20px"
                          pr={{ base: "20px", sm: "40px" }}
                          flex={1}
                          display="flex"
                          justifyContent="space-between"
                       
                          gap="20px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Text fontSize="lg" fontWeight="bold">{`Question ${index + 1}`}</Text>
                          {isExpanded ? (
                            <FaMinus color="white" boxSize="1.5rem" />
                          ) : (
                            <FaPlus color="white" boxSize="1.5rem" />
                          )}
                        </AccordionButton>
                        <AccordionPanel>
                          <Text fontSize="lg" fontWeight="bold">{`Answer ${index + 1}`}</Text>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Flex>

          </Box>

          {/* contact section */}
          <Flex gap={{ md: "1873px", base: "936px", sm: "1404px" }} alignSelf="stretch" flexDirection="column">
            <Flex pt={{ md: "80px", base: "20px" }} bg="blue_gray.900_01" justifyContent="center">
              <Container
                gap="50px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                px="0px"
                p={{ md: "", base: "20px" }}
              >
                <Flex
                  pl="20px"
                  pr={{ base: "20px", sm: "40px" }}
                  borderWidth="1px"
                  borderStyle="solid"
                  bgGradient="linear-gradient(180deg, #ffffff4c,#ffffff00)"
                  boxShadow="md"
                  alignSelf="stretch"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  py="20px"
                  borderRadius="20px"
                  sx={{ "border-image": "linear-gradient(to right #ffffff4c,#ffffff00) 1" }}
                >
                  <Button
                    size="md"
                    variant="fill"
                    fontFamily="Poppins"
                    fontWeight={700}
                    minW="221px"
                    borderRadius="16px"
                  >
                    Contact Us
                  </Button>
                  <Image src="images/img_contrast.svg" h="57px" w="56px" />
                </Flex>
                <Flex gap="40px" w={{ md: "46%", base: "100%" }} flexDirection="column" alignItems="center">
                  <Flex flexDirection="column" alignItems="center">
                    <Heading as="h1" fontFamily="Poppins" fontSize="32px">
                      Need any assistance?
                    </Heading>
                    <Text color="blue_gray.300" mt="-1px" fontWeight={500} position="relative">
                      You didn’t find the answer in the FAQ? Contact us by filling in the form
                    </Text>
                  </Flex>
                  <Box alignSelf="stretch">
                    <Input
                      placeholder={`Full Name`}
                      type="text"
                      borderTopRightRadius="5px"
                      borderBottomRightRadius="5px"
                      pr={{ base: "20px", sm: 0 }}
                    />
                    <Input
                      placeholder={`Email`}
                      type="email"
                      color="white.A700"
                      mt="20px"
                      borderTopRightRadius="5px"
                      borderBottomRightRadius="5px"
                      pr={{ base: "20px", sm: 0 }}
                    />
                    <SelectBox
                      shape="round"
                      indicator={<Image src="images/img_mdimenudown.svg" w="19px" h="21px" />}
                      name="Subject Dropdown"
                      placeholder={`Subject`}
                      options={dropDownOptions}
                      style={{ mt: "20px", gap: "1px", pr: '{"base":"20px","sm":0}' }}
                    />
                    <Box mt="20px" pb={{ base: "20px", sm: "30px" }}>
                      <Textarea
                        placeholder={`Message`}
                        color="white.A700"
                        borderRadius="5px"
                        pb={{ base: "20px", sm: 0 }}
                        pr={{ base: "20px", sm: 0 }}
                      />
                    </Box>
                    <Button
                      colorScheme="yellow_800_01_yellow_700_01"
                      fontFamily="Poppins"
                      fontWeight={700}
                      w="100%"
                      borderRadius="5px"
                      px={{ base: "20px", sm: "" }}
                    >
                      Send
                    </Button>
                  </Box>
                </Flex>
              </Container>
            </Flex>

            {/* newsletter section */}
            {/* <Flex flexDirection="column" alignItems="center">
              <Container
                pl="91px"
                pr="143px"
                zIndex={3}
                position="relative"
                p={{ md: "", base: "20px" }}
                px={{ md: "", base: "20px" }}
              >
                <Box
                  pl={{ base: "20px", sm: "40px" }}
                  borderColor="light_blue.600_33"
                  borderWidth="1px"
                  borderStyle="solid"
                  bg="light_blue.600_19"
                  borderRadius="118px"
                  sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(268.00px)" }}
                >
                  <Flex gap="25px" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                    <Flex gap="7px" flex={1} flexDirection="column" alignItems="center" alignSelf="stretch">
                      <Heading letterSpacing="0.43px" fontFamily="Poppins" fontSize="32px">
                        Join Our Telegram for Daily Updates!
                      </Heading>
                      <Text color="blue_gray.300" fontWeight={500} w={{ md: "80%", base: "100%" }} lineHeight="29px">
                        Join our Telegram Channel and stay ahead of the curve in your investment journey where we offer
                        a comprehensive source of timely market analysis, investment tips, and expert advice delivered
                        directly to your device.
                      </Text>
                    </Flex>
                    <Box
                      h="228px"
                      pl={{ md: "104px", base: "20px" }}
                      bg="light_blue.600_19"
                      w={{ md: "44%", base: "100%" }}
                      position="relative"
                      borderRadius="305px"
                      sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(268.00px)" }}
                    >
                      <Image
                        src="images/img_frame.svg"
                        h="228px"
                        w="81%"
                        position="absolute"
                        right="-0.90px"
                        bottom="0px"
                        top="0px"
                        my="auto"
                      />
                      <Flex
                        bg="white.A700_33"
                        w="92%"
                        position={{ base: "relative", sm: "absolute" }}
                        left="17%"
                        bottom="0px"
                        top="0px"
                        h="max-content"
                        my="auto"
                        borderRadius="8px"
                        flexDirection={{ base: "column", sm: "row" }}
                      >
                        <Input
                          variant="outline"
                          colorScheme="gray_900_19"
                          placeholder={`Enter Your Email Address`}
                          type="email"
                          fontFamily="Poppins"
                          fontWeight={600}
                          flexGrow={1}
                          pr={{ base: "20px", sm: 0 }}
                          p={{ base: "20px", sm: "" }}
                        />
                        <Button
                          colorScheme="yellow_800_01_yellow_700_01"
                          fontFamily="Poppins"
                          fontWeight={700}
                          minW="83px"
                          borderRadius="5px"
                          p={{ base: "20px", sm: "" }}
                          px={{ base: "20px", sm: "" }}
                        >
                          Join
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Container>

              <Footer />
            </Flex> */}
          </Flex>
         {/*  <Container pl="542px" pr="158px" mt="3947px" p={{ md: "", base: "20px" }} px={{ md: "", base: "20px" }}>
            <Box
              h="460px"
              bg="amber.A400_19"
              borderRadius="489px"
              sx={{ "backdrop-filter": "opacity(0.5)", filter: "blur(268.00px)" }}
            />
          </Container> */}
        </Flex>
      </Box>
    </>
  );
}
