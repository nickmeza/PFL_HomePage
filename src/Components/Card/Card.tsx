import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import './Card.css'

export const CardLeft = ({ title, subtitle, description, price, img, play, more, color, white }: { title: string, subtitle?: string, description: string, price: string, img: string, play: boolean, more: boolean, color: string, white: boolean }) => {
    return (
        <>
            <Link color={"inherit"}>
                <Image
                    className="image-travel"
                    objectFit="cover"
                    src={img}
                    verticalAlign="middle" />
            </Link>
            <Box
                className="box-info-pricing" bg={"#" + color}>
                <Link href="https://www.peruforless.com/packages/machu-picchu-peru-6-day-tour/">
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500" className="title">
                        {title}
                    </Text>
                    <strong>
                        <Text fontSize={"1.2rem"} fontWeight="bold">
                            {subtitle}
                        </Text>
                    </strong>
                    {description}
                    <br />
                    <strong>{price}</strong>
                </Link>
                <Flex justifyContent={"end"}>
                    {play && <Image w={"45px"} mt="10px" cursor={"pointer"} src={white ? "https://www.peruforless.com/content-files/uploads/v2/watch-white-2.svg" : "https://www.peruforless.com/content-files/uploads/v2/watch-black-2.svg"} />}
                </Flex>
                {more &&
                    <>
                        <Box mt={"1rem"}>
                            <br />
                            <br />
                            <Link textDecor={"underline"}>Lear More</Link>
                        </Box>
                        <Box mt={"1rem"}>
                            <Link textDecor={"underline"}>Book</Link>
                        </Box>
                    </>
                }
            </Box>
        </>
    )
}

export const CardRight = ({ title, description, price, img, play, more, color, white }: { title: string, description: string, price: string, img: string, play: boolean, more: boolean, color: string, white: boolean }) => {
    return (
        <>
            <Link color={"inherit"}>
                <Image
                    className="image-travel"
                    objectFit="cover"
                    src={img}
                    verticalAlign="middle" />
            </Link>
            <Box
                className="box-info-pricing left" bg={"#" + color}>
                <Link href="https://www.peruforless.com/packages/machu-picchu-peru-6-day-tour/">
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500" className="title">
                        {title}
                    </Text>
                    {description}
                    <br />
                    <strong>{price}</strong>
                </Link>
                <Flex justifyContent={"start"}>
                    {play && <Image w={"45px"} mt="10px" cursor={"pointer"} src={white ? "https://www.peruforless.com/content-files/uploads/v2/watch-white-2.svg" : "https://www.peruforless.com/content-files/uploads/v2/watch-black-2.svg"} />}
                </Flex>
                {more && <Link>Lear More</Link>}
            </Box>
        </>
    )
}

export const CardCenter = ({ title, subtitle, description, price, img, play, more, color, white }: { title: string, subtitle?: string, description: string, price: string, img: string, play: boolean, more: boolean, color: string, white: boolean }) => {
    return (
        <>
            <Link color={"inherit"}>
                <Image
                    className="image-travel"
                    objectFit="cover"
                    src={img}
                    verticalAlign="middle" />
            </Link>
            <Box
                bg={"#" + color}
                className="box-info-bottom">
                <Link href="https://www.peruforless.com/packages/machu-picchu-peru-6-day-tour/">
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500" className="title">
                        {title}
                    </Text>
                    <Text fontSize={"1.75rem"} mb={"2rem"} mt={"10px"} fontWeight="500" className="title">
                        {subtitle}
                    </Text>
                    {description}
                    <br />
                    <strong>{price}</strong>
                    <Flex justifyContent={"start"}>
                        {play && <Image w={"45px"} mt="10px" cursor={"pointer"} src={white ? "https://www.peruforless.com/content-files/uploads/v2/watch-white-2.svg" : "https://www.peruforless.com/content-files/uploads/v2/watch-black-2.svg"} />}
                    </Flex>
                    {more && <Link>Lear More</Link>}
                </Link>
            </Box>
        </>
    )
}

export const CardDream = () => {
    return (
        <>
            <Box position="relative" display={{ base: "block", sm: "none" }}>
                <Image src="https://www.peruforless.com/content-files/uploads/m-hotels.jpg" w={"100%"} />
                <Box
                    position="absolute"
                    width="fit-content"
                    bottom="10px"
                    marginBottom="0"
                    padding="30px"
                    color="white">
                    <h2>Dream Hotels</h2>
                    <Text width="fit-content"
                        fontSize="1rem"
                        lineHeight="22px"
                        margin="10px 0"
                        fontWeight="400">Our team recommends the best hotels for a good night's sleep.
                        Comfort and character guaranteed.</Text>
                    <Link href="a" fontWeight="600"
                        borderBottom="2px solid"
                        color="#ffaa75"
                        fontSize="16px"
                        display="inline-block">View Hotels</Link>
                </Box >
            </Box >
            <Box
                display={{ base: "none", sm: "flex" }}
                flexDirection="row"
                backgroundColor="#f1f4e1e0"
                position="relative">
                <Box>
                    <Image
                        width="auto"
                        vertical-align="middle"
                        borderStyle="none"
                        maxWidth="100%"
                        src="https://www.peruforless.com/content-files/uploads/v2/home-hotels.jpg" alt="hotel" />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    padding="30px"
                    width="480px"
                    justifyContent="center">
                    <Box className="bg-top-line bg-top-line-right bg-top-line-center bg-top-line-medium no-mobile">
                    </Box>
                    <Text marginBottom="1rem"
                        fontFamily="'Ubuntu', sans-serif"
                        fontSize="2rem">Dream hotels</Text>
                    <br />
                    <br />
                    <Text
                        marginTop="0.5rem"
                        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                        fontSize="1rem"
                        color="#212529"
                    >Your travel advisor will recommend the best hotels for a good night's sleep. Comfort and character
                        guaranteed.</Text>

                    <Link
                        href="https://www.peruforless.com/hotels/"
                        className="btn-transparent c-black"
                        width="max-content"
                        color="#333"
                        textDecoration="none"
                        backgroundColor="transparent"
                        padding="15px 20px"
                        border="1px solid"
                        marginTop="20px"
                        /* color= #333 */
                        fontSize="1.2rem">View More</Link>
                </Box>
            </Box>
        </>
    )
}

