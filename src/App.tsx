import { Box, Container, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Banner } from './Components'
import "./App.css"
import { Book } from './layout/Book/Book'
import { Package } from './layout/Package/Package'
import { Expertise } from './layout/Expertise/Expertise'
import { Staff } from './layout/Staff/Staff'
import { Specialists } from './layout/Staff/Specialists'
import { LinkImage } from './Components/Link/Link'
import { CardDream } from './Components/Card/Card'
import { Form } from './layout/Form/Form'
import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Box padding={"160px 10px 0px 50px"} background={"#f2f7e8"}>
        <Banner />
      </Box>
      <Book />
      <Package />
      <Expertise />
      <Staff />
      <CardDream />
      <Box display={{ base: "none", sm: "block" }}>
        <Specialists />
      </Box>
      <Form />
      <Flex justifyContent={"center"} textAlign="center" color="#f95d24" fontSize={"1.3rem"} p={"25px 10px 20px 10px"}>
        <Container maxW={{ base: "600px", md: "1140px" }}>
          We sell virtually all services available in Peru, Galapagos, Brazil, Argentina, Chile and Bolivia
        </Container>
      </Flex>
      <Box
        padding="40px 0px"
        backgroundColor="#f8f8f8"
        w={"100%"}>
        <Container maxW={"1140px"}>
          <Flex justifyContent={"space-around"} wrap="wrap">
            <LinkImage img='https://www.peruforless.com/content-files/uploads/v2/i-cnn.svg' />
            <LinkImage img='https://www.peruforless.com/content-files/uploads/v2/i-nyt.svg' />
            <LinkImage img='https://www.peruforless.com/content-files/uploads/v2/i-bbc.svg' />
            <LinkImage img='https://www.peruforless.com/content-files/uploads/v2/i-usa-today.svg' />
            <LinkImage img='https://www.peruforless.com/content-files/uploads/v2/i-asta.svg' />
            <LinkImage img='https://www.peruforless.com/content-files/uploads/v2/i-bbb.svg' />
          </Flex>
        </Container>
      </Box>
      <Footer />
    </div>
  )
}

export default App
