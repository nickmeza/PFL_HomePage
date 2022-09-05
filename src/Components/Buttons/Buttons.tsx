import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const ButtonsForm = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            margin="0.5%"
            flexGrow="1"
            flexBasis="0"
            borderRadius="4px"
            height=" 65px"
            background="#fff"
            padding="5px 0 10px 0"
            border="1px solid #ddd"
            _hover={{
                border: "2px solid #4782c0"
            }}
            textAlign="center"
            fontWeight="300"
            cursor="pointer"
            position="relative"
            transition="all 0.2s ease-in-out">
            {children}
        </Box>
    )
}
export const Icons = ({ icon }: { icon: ReactNode }) => {
    return (
        <>
            <Box
                display={{ base: "none", sm: "block" }}
                margin="0.5% 0.5% 0.5% 0"
                height="65px"
                padding="18px 20px 10px"
                border="1px solid #ddd"
                borderRadius="4px"
                backgroundColor="#f0f0f0"
                textAlign="center">
                {icon}
            </Box>
        </>
    )
}