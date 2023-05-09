"use client"

import { Block, BlockTitle, Navbar, Page, NavbarBackLink } from "konsta/react";
import { useRouter } from "next/navigation"

export default function page() {
    const router = useRouter()

    return (
        <Page>
            <Navbar
                left={
                    <NavbarBackLink
                        text="Back"
                        onClick={() => router.back()}
                    />
                }
                title="Music"
            />

            <BlockTitle>
                hello world
            </BlockTitle>
            <Block>
                music page
            </Block>
        </Page>
    )
}