import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
}

const theme = extendTheme({ config })

type colorsV = 'primary' | 'secondary' | 'background' | 'super' | 'weaksuper'

export const colors: Record<colorsV, string> = {
    primary: 'grey.10',
    secondary: 'orange.300',
    background: 'lime',
    super: 'grey.700',
    weaksuper: 'grey.60'
}

export default theme