import { Box, Image, Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LinkImage = ({ img }: { img: string }) => {
    return (
        <Link>
            <Image h={"35px"} src={img} />
        </Link>
    )
}
export const LinkPrimary = ({ text }: { text: string }) => {
    return (
        <Link color={"white"}>
            <Text mb={{ base: "30px", md: "8px" }}>{text}</Text>
        </Link>
    )
}
export const LinkSecondary = ({ text }: { text: string }) => {
    return (
        <Link color={"#AAA9A9"} _hover={{ textDecoration: "underline", color: "white" }}>
            <Text mb={"8px"}>{text}</Text>
        </Link>
    )
}