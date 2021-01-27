import { GoLogoGithub } from "react-icons/go"
import {FaLinkedin} from "react-icons/fa"
import { Box, Flex, Link } from "@chakra-ui/react"
import { Link as ReactLink} from "react-router-dom"
const Footer = () => {

    return (
        <Flex position="absolute" left="50%" bottom="50px" alignItems="center">
            <Box padding="0 15px" cursor="pointer">
                <Link color="#333" as={ReactLink} to={{ pathname: "https://github.com/Saoming" }} isExternal>
                    <GoLogoGithub size={60} />
                </Link>
            </Box>
            <Box padding="0 15px" cursor="pointer">
                <Link color="#333" as={ReactLink} to={{ pathname: "https://www.linkedin.com/in/samuel-tirtawidjaja-891939132/" }} isExternal>
                    <FaLinkedin  size={30} />
                </Link> 
            </Box>
        </Flex> 
    )
}

export default Footer