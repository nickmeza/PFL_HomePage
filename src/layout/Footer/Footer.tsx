import { Box, Center, Container, Divider, Flex, Input, InputGroup, InputRightAddon, Link, Text } from "@chakra-ui/react";
import { LinkPrimary, LinkSecondary } from "../../Components/Link/Link";
import { FaChevronRight, FaFacebookSquare, FaTwitterSquare, FaYoutube, FaPinterestSquare } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer style={{ background: "#221410" }}>
            <Container
                display={{ base: "none", sm: "block" }}
                borderBottom="1px solid #3f2b1f"
                maxW={"1140px"}
                px={"15px"}
                py={"45px"}
            >
                <Flex textAlign={{ base: "center", md: "start" }} flexDir={{ base: "column", md: "row" }}>
                    <Box flex={"2"}>
                        <LinkPrimary text="Tour Packages" />
                        <LinkSecondary text="All Peru Tours" />
                        <LinkSecondary text="Machu Picchu Tours" />
                        <LinkSecondary text="Hiking & Trekking Tours" />
                        <LinkSecondary text="Galapagos Tours" />
                        <LinkSecondary text="Amazon Tours" />
                        <LinkSecondary text="Inca Trail Tours" />
                    </Box>
                    <Box flex={"2"}>
                        <LinkPrimary text="Destinations" />
                    </Box>
                    <Box flex={"2"}>
                        <LinkPrimary text="Hotels" />
                    </Box>
                    <Box flex={"2"}>
                        <LinkPrimary text="Reviews" />
                    </Box>
                    <Box flex={"2"}>
                        <LinkPrimary text="About Us" />
                        <LinkSecondary text="Work for us" />
                    </Box>
                    <Box flex={"2"}>
                        <LinkPrimary text="Blog" />
                        <LinkSecondary text="Quality articles written and researched by our in-house travel experts." />
                    </Box>
                </Flex>

            </Container>

            <Container
                maxW={"1140px"}
                px={"15px"}
                py={"45px"}
            >
                <Flex gap={"30px"} textAlign={{ base: "center", md: "start" }} flexDir={{ base: "column", md: "row" }}>
                    <Box flex={"4"} color={"#AAA9A9"}>
                        <Text color={"white"} mb={"15px"}><strong>Contact</strong></Text>
                        Email: <Link color={"#C19D71"} >travel@latinamericaforless.com</Link>
                    </Box>
                    <Box flex={"4"} color={"#AAA9A9"}>
                        <Text color={"white"} mb={"15px"}><strong>Newsletter</strong></Text>
                        <Text mb={"15px"}>Sign up to receive our newsletter for great articles, stunning photos, and special deals.</Text>

                        <InputGroup border={"none"} bg="white">
                            <Input type='email' placeholder='Enter your e-mail' />
                            <InputRightAddon children={<><FaChevronRight color="white" fontWeight={"bold"} /></>} bg={"#E67E22"} />
                        </InputGroup>
                    </Box>
                    <Box flex={"4"}>
                        <Link _hover={{ textDecor: "underline", textDecorationColor: "white" }}>
                            <Text color={"#fff"} fontSize="2rem"> 1-817-230-4971</Text>
                        </Link>
                        <Text color={"#AAA9A9"} mb={"15px"}>Sales & travel support</Text>
                        <Flex color={"#AAA9A9"} gap="10px" justifyContent={{ base: "center", md: "start" }}>
                            <Link _hover={{ color: "white" }} h={"24px"}>
                                <FaFacebookSquare fontSize={"23px"} />
                            </Link>
                            <Link _hover={{ color: "white" }} h={"24px"}>
                                <FaTwitterSquare fontSize={"23px"} />
                            </Link>
                            <Link _hover={{ color: "white" }} h={"24px"}>
                                <FaYoutube fontSize={"23px"} />
                            </Link>
                            <Link _hover={{ color: "white" }} h={"24px"}>
                                <FaPinterestSquare fontSize={"23px"} />
                            </Link>
                        </Flex>
                    </Box>
                </Flex>

            </Container>
        </footer >
    )
}