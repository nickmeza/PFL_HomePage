import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { BiMenu } from 'react-icons/bi';


export const Header = () => {
    return (
        <Box bg={"#f2f4f6"} position={"fixed"} p={"20px"} w="100%" zIndex={"5"} >
            <Flex justifyContent={"space-between"} >
                <Link>
                    <Image w={"250px"} src="https://www.peruforless.com/content-files/uploads/v2/pfl-logo-1.svg" />
                </Link>
                <Flex  alignItems={"center"} gap="30px" p={"15px 30px"}>

                    <b>+1 817 230 4971</b>
                    <Link color={"white"} borderRadius="6px" fontSize="1.1rem" background="#f95d25" padding="6px 20px">Start Planning My Trip</Link>
                    <BiMenu cursor={"pointer"} fontSize={"50px"} color="black" />
                </Flex>
            </Flex>
        </Box>
    )
}