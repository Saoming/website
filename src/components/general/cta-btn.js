import { Link, Box, Heading } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"

export const CTAButton = () => {
    return (
        <Box background="#FC926B" borderRadius="50%" width="116px" height="116px" cursor="pointer">
            <Link as={ReactLink} to="/commission" textDecoration="none">
            <Box padding="5px 12px" transform="rotate(-16deg)">
                <Heading userSelect="none" as="h4" color="#fff" fontSize="22px" fontFamily="Inter, sans-serif" textAlign="center"> Get In Touch </Heading>
            </Box>
            </Link>
        </Box>
    )
}