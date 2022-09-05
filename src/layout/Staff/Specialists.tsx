import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { SpecialistPerfil } from "../../Components/Specialist/Specialist";

export const Specialists = () => {
    return (
        <>
            <Box bg={"#fff url(https://www.peruforless.com/content-files/themes/pfl-theme/images/f-form-bottom.png) repeat-x"} position={"relative"} h={"14px"}></Box>
            <Container maxW={"1140px"} pt={"10px"} pb={"14px"}>
                <Link>
                    <Flex>
                        <Box lineHeight={"1.1em"} fontSize={"1.3em"} color={"#e67e22"} flex={"2"} pr={"30px"}>
                            <Text>
                                The Peru Specialists
                            </Text>
                        </Box>
                        <Flex flex={"10"} pl={"-20px"} justifyContent={"space-around"}>
                            <SpecialistPerfil initial={true} name="Kim MacQuarrie" title="FOUR-TIME EMMY-WINNER" subtitle="" img="https://www.peruforless.com/content-files/uploads/specialist-mini-kim.jpg" />
                            <SpecialistPerfil name="Virgilio Martinez" title="WORLD'S TOP CHEF AWARD WINNER" subtitle="Our culinary expert" img="https://www.peruforless.com/content-files/uploads/v2/mil/specialist-mini-virgilio.jpg" />
                            <SpecialistPerfil name="Alonso Cueto" title="PH.D. UNIVERSITY OF TEXAS, AUSTIN" subtitle="" img="https://www.peruforless.com/content-files/uploads/specialist-mini-alonso.jpg" />
                            <SpecialistPerfil name="Gonzalo Salinas" title="PH.D. OXFORD, M.A. HARVARD" subtitle="" img="https://www.peruforless.com/content-files/uploads/specialist-mini-gonzalo.jpg" />
                        </Flex>
                    </Flex>
                </Link>
            </Container>
        </>
    )
}