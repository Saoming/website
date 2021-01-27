import Header from "../components/top-navigation/header"
// import MovingText from "./components/moving-text/text"
import BackgroundHomepage from "../components/background/line"
import { DiamondShape } from "../components/general/shape"
import { Link, Box, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import { CTAButton } from "../components/general/cta-btn";
import Footer from "../components/footer/footer";
import { Link as ReactLink } from "react-router-dom"

const  Home = () => {
  return (
    <>
        {/* Header inside the Body */}
        <Header />
        {/* Main Content */}
        {/* <div style={{ overflow: "hidden"}}>
        <MovingText />
        </div> */}
        <Container>
        {/* Content Page */}
        <Box className="container center">
          {/* Left Side */}
          <Box className="left-container">
            <Flex id="diamondshape" flexDirection="column">
              <DiamondShape />
              <DiamondShape />
            </Flex>
          </Box>
          {/* Right Side */}
          <Box className="right-container" zIndex="10">
            <Spacer height="75px" />
            <Box>
              <Heading as="h1" fontWeight="500" fontSize="38px" fontFamily="Fira Code, sans-serif"> Hi, I am a multidisciplinary Front End Developer. Heavily focused on Web and Hybrid Apps. </Heading>
   
              <Link as={ReactLink} to="/case-study"
                      fontSize="28px" background="transparent"
                      color="#333"
                      borderBottom="1px solid" 
                      fontFamily="Inconsolata, sans-serif" letterSpacing="2px" fontWeight="300" cursor="pointer" textDecoration="none">
                         View Case study
              </Link>
            </Box>
          </Box>
        </Box>
        </Container>

        {/* CTA, Diagonals */}
        <BackgroundHomepage />
        <Box position="absolute" bottom="50px" left="125px">
          <CTAButton />
        </Box>
        <Footer />       
    </>
  );
}

export default Home;
