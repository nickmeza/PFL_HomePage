import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Specialist = ({ title, subtitle, children, img }: { title: string, subtitle: string, children: ReactNode, img: string }) => {
    return (
        <Box flex={"6"}>
            <Text display={{ base: "none", sm: "block" }} fontSize={"1.4rem"} mb={"2rem"} mt={"10px"} fontWeight="500" color={"#e67532"} className="title">
                {title}
                <br />
                <Text as={"span"} fontWeight="200">{subtitle}</Text>
            </Text>
            <Text display={{ base: "none", sm: "block" }}>
                {children}
            </Text>
            <br />
            <Image src={img} />
            <Text display={{ base: "block", sm: "none" }} textAlign={"center"} fontSize={"1.1rem"} mb={"20px"} mt={"10px"} fontWeight="bold" color={"#000000"}>
                {title},{subtitle}
            </Text>
        </Box>
    )
}

export const SpecialistPerfil = ({ name, title, subtitle, img, initial }: { name: string, title: string, subtitle: string, img: string, initial?: boolean }) => {
    return (
        <Flex gap={"4px"} ml={initial ? "-15px" : ""}>
            <Image src={img} boxSize={"60px"} display={{ base: "none", lg: "block" }} />

            <Box color="#666">
                <Text
                    lineHeight="1.2em"
                    fontSize="0.8em">
                    {name}
                </Text>
                <Text
                    as={"span"}
                    width="65%"
                    lineHeight="16px"
                    textTransform="uppercase"
                    fontSize="10.24px"
                    fontWeight="500"
                    className="title"
                    display="inline-block"
                    verticalAlign="top">
                    <strong>{title}</strong>
                </Text>
                <Text fontSize="0.8em">
                    {subtitle}
                </Text>
            </Box>
        </Flex >
    )
}