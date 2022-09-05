import { Box, Center, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import { ButtonsForm, Icons } from "../../Components/Buttons/Buttons";
import { FaHome, FaMale, FaSuitcase, FaCalendarAlt } from 'react-icons/fa';


export const Form = () => {
    return (
        <Box
            background="rgba(241, 241, 241, 0.92)"
            display={"block"}
            mx={"auto"}
            color="#656565"
            paddingBottom="0px"
            zIndex="1"
            fontWeight="200"
            position="relative">
            <Box
                maxW={"600px"}
                pt={"60px"}
                h={"100%"}
                width={"100%"}
                px={"15px"}
                mx={"auto"}>
                <Center flexDirection={"column"} textAlign={"center"}>
                    <Image h={"32px"} src="https://www.peruforless.com/content-files/themes/pfl-theme/images/pfl-logo.svg" />
                    <Text fontWeight={"500"} mt={"0.5rem"} fontSize={"1.5rem"}>Book With Confidence</Text>
                    <Text fontWeight={"200"}>We're flexible! Postpone your tour with zero cost up to 30 days prior to departure.</Text>
                    <Text letterSpacing="1px"
                        textAlign="center"
                        fontSize="1.1rem"
                        marginBottom="0.5rem"
                        fontWeight="500"
                        className="title"
                        lineHeight="1.2">HOTEL QUALITY</Text>
                    <Text fontWeight={"200"}>(Optional. You may choose more than one)</Text>
                    <Flex w={"100%"}>
                        <Icons icon={
                            <FaHome
                                fontSize="24px"
                                width="24px" />
                        } />
                        <ButtonsForm>
                            <Text as={"span"}>Luxury</Text><br />
                            <Text as={"span"} color="#e67e22">★★★★★</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text as={"span"}>Superior</Text><br />
                            <Text as={"span"} color="#e67e22">★★★★</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text as={"span"}>Best Value</Text><br />
                            <Text as={"span"} color="#e67e22">★★★</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text as={"span"}>Budget</Text><br />
                            <Text as={"span"} color="#e67e22">★★</Text>
                        </ButtonsForm>
                    </Flex>
                    <Text letterSpacing="1px"
                        textAlign="center"
                        fontSize="1.1rem"
                        marginBottom="0.5rem"
                        fontWeight="500"
                        className="title"
                        lineHeight="1.2">NUMBER OF TRAVELERS</Text>

                    <Flex w={"100%"}>
                        <Icons icon={
                            <FaMale
                                fontSize="24px"
                                width="24px" />
                        } />
                        <ButtonsForm>
                            <Text
                                fontSize={"30px"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer" as={"span"}>1</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"30px"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>2</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"30px"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>3</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"30px"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>4</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"30px"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>5</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={".7rem"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>Specify</Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Box h={"7px"}></Box>
                            <Text fontSize={".7rem"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>Undecided</Text>
                        </ButtonsForm>
                    </Flex>
                    <Text letterSpacing="1px"
                        textAlign="center"
                        fontSize="1.1rem"
                        marginBottom="0.5rem"
                        fontWeight="500"
                        className="title"
                        lineHeight="1.2">TRIP LENGTH</Text>

                    <Flex w={"100%"}>
                        <Icons icon={
                            <FaSuitcase
                                fontSize="24px"
                                width="24px" />
                        } />
                        <ButtonsForm>
                            <Text fontSize={"1rem"}
                                textAlign="center"
                                fontWeight="300"
                                as={"span"}>
                                3-5 <br />

                            </Text>
                            <Text
                                fontSize={"12px"}
                                textAlign="center"
                                fontWeight="300">
                                Days
                            </Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"1rem"}
                                textAlign="center"
                                fontWeight="300"
                                as={"span"}>
                                6-8 <br />

                            </Text>
                            <Text
                                fontSize={"12px"}
                                textAlign="center"
                                fontWeight="300">
                                Days
                            </Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"1rem"}
                                textAlign="center"
                                fontWeight="300"
                                as={"span"}>
                                9-11 <br />

                            </Text>
                            <Text
                                fontSize={"12px"}
                                textAlign="center"
                                fontWeight="300">
                                Days
                            </Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"1rem"}
                                textAlign="center"
                                fontWeight="300"
                                as={"span"}>
                                12-15 <br />

                            </Text>
                            <Text
                                fontSize={"12px"}
                                textAlign="center"
                                fontWeight="300">
                                Days
                            </Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Text fontSize={"1rem"}
                                textAlign="center"
                                fontWeight="300"
                                as={"span"}>
                                16+ <br />

                            </Text>
                            <Text
                                fontSize={"12px"}
                                textAlign="center"
                                fontWeight="300">
                                Days
                            </Text>
                        </ButtonsForm>
                        <ButtonsForm>
                            <Box h={"7px"}></Box>
                            <Text fontSize={".7rem"} textAlign="center"
                                fontWeight="300"
                                cursor="pointer"
                                as={"span"}>Undecided</Text>
                        </ButtonsForm>
                    </Flex>
                    <Box mb={"1rem"}>
                        <Text letterSpacing="1px"
                            textAlign="center"
                            fontSize="1.1rem"
                            marginBottom="0.5rem"
                            fontWeight="500"
                            className="title"
                            lineHeight="1.2">FOODIE HIGHLIGHTS</Text>
                        <Text fontWeight={"200"} mt={"0.5rem"} fontSize={"1.5rem"}>Are you interested in adding a meal at one of the best restaurants in Latin America?</Text>
                        <Text fontWeight={"bold"} mt={"0.5rem"} fontSize={"1.5rem"}>(feel free to select both options)</Text>
                        <Flex w={"100%"}>
                            <ButtonsForm>
                                <Text fontSize={"1rem"}
                                    textAlign="center"
                                    fontWeight="300"
                                    as={"span"}>
                                    Central <br />

                                </Text>
                                <Text
                                    fontSize={"12px"}
                                    textAlign="center"
                                    fontWeight="300">
                                    (Lima)
                                </Text>
                            </ButtonsForm>
                            <ButtonsForm>
                                <Text fontSize={"1rem"}
                                    textAlign="center"
                                    fontWeight="300"
                                    as={"span"}>
                                    Mil<br />

                                </Text>
                                <Text
                                    fontSize={"12px"}
                                    textAlign="center"
                                    fontWeight="300">
                                    (Moray - Cusco)
                                </Text>
                            </ButtonsForm>
                        </Flex>
                        <Flex w={"100%"} mt="20px">
                            <label htmlFor="picker">
                                <Icons icon={
                                    <FaCalendarAlt
                                        fontSize="24px"
                                        width="24px" />
                                } />
                            </label>
                            <Input
                                id="picker"
                                placeholder=" Tentative or set travel dates"
                                background="#fff"
                                lineHeight="1.5"
                                h={"65px"}
                                padding="10px 0 10px 15px"
                                border="1px solid #ddd"
                                borderRadius="4px"
                                margin="0.5%"
                                width="100%"
                                type={"datetime-local"} />
                        </Flex>
                        <Flex w={"100%"} mt="15px" px={"15px"} justifyContent="space-between">
                            <Link
                                border="2px solid #999"
                                color="#999"
                                bg={"transparent"}
                                padding="0.5rem 1rem"
                                fontSize="1.25rem"
                                lineHeight="1.5"
                                borderRadius="0.3rem">
                                Skip
                            </Link>
                            <Flex align={"center"}>
                                <Link
                                    border="2px solid #999"
                                    background="#4782c0"
                                    color="white"
                                    padding="0.5rem 1rem"
                                    fontSize="1.25rem"
                                    lineHeight="1.5"
                                    borderRadius="0.3rem">
                                    Next
                                </Link>
                                <Text color="#4782c0" fontWeight={"200"} fontSize="1.5rem" ml={"8px"}>1/2</Text>
                            </Flex>
                        </Flex>
                        <Flex w={"100%"} color="#446fac" justifyContent="flex-end">
                            <Link> travel@latinamericaforless.com</Link>
                        </Flex>

                    </Box>
                </Center>

            </Box>
        </Box >
    )
}