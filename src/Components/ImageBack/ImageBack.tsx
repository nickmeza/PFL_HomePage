import { Box, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

export const ImageBack = ({ img, children, color }: { img: string, children: ReactNode, color: string }) => {
    return (
        <Box display={{ base: "none", md: "block" }} color={color} mt={"1.8rem"} flex={"4"} position={"relative"} height={"100%"}>
            <Box>
                <Image w={"100%"} src={img} />
            </Box>

            {children}
        </Box>
    )
}