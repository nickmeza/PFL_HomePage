import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ImageBack } from "../../Components/ImageBack/ImageBack";
import { Specialist } from "../../Components/Specialist/Specialist";

export const Expertise = () => {
    return (
        <Box color={"#212529"} width="100%" mt={"80px"} mb={"20px"} maxWidth="1240px" mx="auto" px="30px">
            <Box
                display={{ base: "none", sm: "block" }}
                textTransform="uppercase"
                letterSpacing=".4px"
                marginBottom="5px"
                fontWeight="bold"
                fontSize={"1.4rem"}>
                <Text as={"span"}
                    width="30px"
                    height="6px"
                    display="inline-block"
                    paddingBottom="5px"
                    marginRight="5px"
                    bg={"#7fb069e8"}></Text>
                Expertise & Commitment
            </Box>
            <Box px={"3rem"} pt={"1.5rem"} mt={"10px"} bg={"#f1f4e1e0"}>
                <Text fontWeight="500"
                    className="title"
                    lineHeight="1.2"
                    fontSize={"1.8rem"}>
                    Meet Our Peru Specialists
                </Text> <br />
                <Divider
                    width="30px"
                    border-top="5px solid"
                    display="inline-block"
                    margin="0" />
                <Flex wrap={"wrap"} flexDirection={{ base: "column", md: "row" }}>
                    <Specialist
                        title={"Virgilio Martinez"}
                        subtitle={"Winner of the world’s top chef award"}
                        children={<>
                            Virgilio Martinez takes Peruvian ingredients and creates something <br />
                            extraordinary. His Central and MIL restaurants continuously climb the <br />
                            World’s Best 50 Lists with Central claiming the title of 6th <br />
                            best restaurant in the world. <b> He join us as our culinary expert.</b>
                        </>}
                        img={"https://www.peruforless.com/content-files/uploads/v2/collage-virgilio.jpg"} />
                    <Specialist
                        title={"Kim MacQuarrie"}
                        subtitle={"Four-time Emmy winner"}
                        children={<>
                            Kim MacQuarrie is a renowned documentary filmmaker,
                            anthropologist, conservationist and best-selling
                            author of the book The Last Days of the Incas. As
                            one of our Peru Specialists, he offers a wealth
                            of cultural and regional knowledge with our team
                            and travelers.
                        </>}
                        img={"https://www.peruforless.com/content-files/uploads/v2/collage-kim.jpg"} />
                </Flex>

            </Box>
            <Flex gap={"30px"}>
                <ImageBack color="white" img="https://www.peruforless.com/content-files/uploads/v2/me-testimonials.jpg" >
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        width="80%"
                        transform="translate(-50%, -50%)"
                        textAlign={"center"}>
                        <Text mt={"10px"} fontSize={"1.8rem"} fontWeight={"500"} as={"h2"}>5-Star Reviews</Text>
                        <Image w={"40px"} m={"10px auto 20px"} src={"https://www.peruforless.com/content-files/uploads/v2/i-play.svg"} />
                        <Text mb={"1rem"}>We are proud of the over 5,000 outstanding reviews from our travelers.</Text>
                        <br />
                        <Link
                            padding="15px 20px"
                            border="1px solid"
                            marginTop="20px"
                            color="inherit"
                            fontSize="1.2rem"
                        >
                            Read More
                        </Link>
                    </Box>
                </ImageBack>
                <ImageBack color="black" img="https://www.peruforless.com/content-files/uploads/v2/h-local-development.jpg" >
                    <Box
                        position="absolute"
                        top="15px"
                        left="45px"
                        width="80%">
                        <Text mt={"10px"} fontSize={"1.8rem"} fontWeight={"500"} as={"h2"}>Local Development</Text>
                        <Divider
                            width="30px"
                            borderTop="5px solid black"
                            display="inline-block"
                            margin="0" />
                        <Text mb={"1rem"}>Ethical travelers want a travel company with a purpose.</Text>
                        <br />
                        <Link
                            padding="15px 20px"
                            border="1px solid"
                            marginTop="20px"
                            color="inherit"
                            fontSize="1.2rem"
                        >
                            Read More
                        </Link>
                    </Box>
                </ImageBack>
                <ImageBack color="white" img="https://www.peruforless.com/content-files/uploads/v2/me-rylee.jpg" >
                    <Box
                        position="absolute"
                        bottom={"45px"}
                        left="30px"
                        mr="30px">
                        <Text mt={"10px"} fontSize={"1.8rem"} fontWeight={"500"} as={"h2"}>Travel Advisors</Text>
                        <Divider
                            width="30px"
                            borderTop="5px solid white"
                            display="inline-block"
                            margin="0" />
                        <Text mb={"1rem"}>Our extensive knowledge is rooted in our own travel experiences. Let us guide you as you plan your trip of a lifetime!</Text>
                        <br />
                        <Link
                            padding="15px 20px"
                            border="1px solid"
                            marginTop="20px"
                            color="inherit"
                            fontSize="1.2rem"
                        >
                            Read More
                        </Link>
                    </Box>
                </ImageBack>
            </Flex>
        </Box >
    )
}