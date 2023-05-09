"use client"

import { Box, HStack } from "@chakra-ui/react"

export default function HorizontalStck({items=[], renderer, containerClass, wrapperClass, gap=12}) {
    return (
        <Box width="full" overflowX="auto" className={wrapperClass} >
            <HStack width="max-content" gap={gap} className={containerClass} >
                {
                    items.map(item => (
                        renderer(item)
                    ))
                }
            </HStack>
        </Box>
    )
}