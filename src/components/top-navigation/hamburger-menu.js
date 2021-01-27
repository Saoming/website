import React, { useRef } from "react"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react";

function NavigationContainer() {

    const MenuRef = useRef();

    return (
        <Box>
            <CircleBtn ref={MenuRef} initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 0.5 }} />
        </Box>
    )
}


const CircleBtn = styled(motion.div)`
    width: 35px;
    height: 35px;
    background: #3645BC;
    border-radius: 50%;
    cursor: pointer;
`;

export { NavigationContainer }