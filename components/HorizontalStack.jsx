"use client"

import { Box, HStack } from "@chakra-ui/react"

export default function HorizontalStck({items=[], renderer, containerClass, wrapperClass, gap=12, title, titleClass, titleCoolor}) {
    return (
        <Box width="full" overflowX="hidden">
            <p style={{color:(titleCoolor?titleCoolor:"black")}} className={"text-2xl font-normal font-sans tracking-wide " + titleClass}>{title}</p>
            <Box width="full" overflowX="auto" className={wrapperClass} mt={12} >
                <HStack width="max-content" gap={gap} className={containerClass} >
                    {
                        items.map(item => (
                            renderer(item)
                        ))
                    }
                </HStack>
            </Box>
        </Box>
    )
}