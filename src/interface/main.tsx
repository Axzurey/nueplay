import { Box } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { colors } from "../shared/theme";

export function MainInterface() {
    return (
    <Box minW='100vw' minH='100vh' bg={colors.weaksuper}>
        <Sidebar>
            
        </Sidebar>
    </Box>
    )
}