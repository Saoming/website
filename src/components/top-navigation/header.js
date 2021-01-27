import React from "react"
import LogoSrc from "../../assets/logo.svg"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

/* Extra Components */
import { NavigationContainer } from "./hamburger-menu"
import { Flex } from "@chakra-ui/react"

function Header() {

    return(
        <Flex zIndex="20" position="absolute" top="0" width="100%" maxWidth="100%" justifyContent="space-between" alignItems="center" padding="32px 0">
            <Logo src={LogoSrc} alt="logo" initial={{ opacity: 0 }} animate={{ x: 32, opacity: 1}} transition={{ delay: 0.5 }} />
            <RightMenu>
                <RightMenuText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} > Creative / Front End </RightMenuText>
                <NavigationContainer />
            </RightMenu>
        </Flex>   
    )

}

const RightMenu = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-right: 32px;
`;

const RightMenuText = styled(motion.h4)`
    white-space: nowrap;
    -webkit-text-stroke: 1px black;
    color: transparent;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-right: 25px;
`;

const Logo = styled(motion.img)`
    width: 100px;
`;

export default Header