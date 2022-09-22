import { Box, Button, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../shared/theme";

interface sidebarProps {
    children: React.ReactNode[]
}

export function Sidebar(props: sidebarProps) {
    const [currentSidebarIndex, setCurrentsidebarIndex] = useState(0);

    return (
        <VStack w='20vw' h='100vh' bg={colors.super} align='stretch' spacing='4'>
            {props.children && props.children[currentSidebarIndex]}
        </VStack>
    )
}

interface sidebarItemProps extends React.PropsWithChildren {
    text: string,
    callback: () => void
}

export function sidebarItem(props: sidebarItemProps) {
    return (
        <Button>

        </Button>
    )
}