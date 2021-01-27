import React, { } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const MovingText = () => {

    return (
        <Heading 
        initial={{ originX: 0 }} 
        animate={{ x: -2000}} 
        transition={{ ease: "linear", duration: 6, loop: Infinity }}
        >
            <>WORK WORK WORK </> <>WORK WORK WORK</>
        </Heading>
    )
}

const Heading = styled(motion.h1)`
    display: flex;
    white-space: nowrap;
    -webkit-text-stroke: 1px black;
    color: transparent;
    font-size: clamp(8rem, 15vw, 16rem);

`;

export default MovingText