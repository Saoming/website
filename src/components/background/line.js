import React from "react"
import { motion } from "framer-motion"
import styled from "@emotion/styled"


function BackgroundHomepage() {

    return (
        <Wrapper>
            <LineOne />
            <LineTwo />
            <LineThree />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    pointer-events: none;
`;
const LineOne = styled(motion.div)`
position: absolute;
top: 0;
border-left: 2px solid #D3FB43;
width: 0;
height: 100%;
z-index: 0;
transform: skew(-45deg);
left: 70px;
`;
const LineTwo = styled(motion.div)`
position: absolute;
top: 0;
border-left: 2px solid #FC926B;
width: 0;
height: 100%;
z-index: 0;
transform: skew(-62deg);
left: 45.5%;
`;
const LineThree = styled(motion.div)`
position: absolute;
top: 0;
border-left: 2px solid #EDD95C;
width: 0;
height: 100%;
z-index: 0;
transform: skew(25deg);
right: 20%;
`;

export default BackgroundHomepage