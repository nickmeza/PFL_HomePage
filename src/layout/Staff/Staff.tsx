import { Box, Center, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";

export const Staff = () => {
    return (
        <Box width="100%" mt={"80px"} mb={"20px"} maxWidth="1240px" mx="auto" px="30px">
            <Flex textAlign={"center"} px={"8.333333%"} flexDirection={"column"} justifyContent={"center"}>
                <Text mt={"10px"} fontSize={"1.8rem"} fontWeight={"500"} as={"h2"}>Meet our staff</Text>
                
                <Center mt={"8px"}>
                    <Divider
                        width="30px"
                        borderTop="5px solid black"
                        display="inline-block"
                        margin="0" />
                </Center>
                <Text>
                    Since 1998, the Peru for Less team has
                    been composed of a diverse group of expert
                    travelers and professionals hailing from
                    cities across Peru and from countries around
                    the world. Despite our different backgrounds,
                    we share two things in common: a passion for
                    exploring and a belief that responsive and
                    caring customer service is the surest path to
                    creating an excellent and comfortable vacation
                    experience.
                </Text>
                <Center>
                    <Link
                        padding="10px 20px"
                        border="1px solid"
                        marginTop="20px"
                        color="inherit"
                        fontSize="1.2rem"
                        w={"fit-content"}
                    >
                        Read More
                    </Link>
                </Center>
                <Image src="https://www.peruforless.com/content-files/uploads/v2/staff-lima.jpg" />
            </Flex>
        </Box>
    )
}