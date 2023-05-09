"use client"

import { IconButton } from "@chakra-ui/react"
import { AiOutlineThunderbolt, AiOutlineUser } from "react-icons/ai"
import { IoHeadsetOutline, IoSearchOutline } from "react-icons/io5"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function BottomNavigatoin() {
    const path = usePathname()

    return (
        <div className="w-full flex items-center justify-evenly">

            <Link href="/">
                <IconButton
                    icon={<AiOutlineThunderbolt className={`w-6 h-6 ${path==="/"?"fill-[var(--primary-color)]":"fill-[var(--primary-color-60)]"}`} />}
                />
            </Link>

            <Link href="/music">
                <IconButton
                    icon={<IoHeadsetOutline className={`w-6 h-6 ${path==="/music"?"stroke-[var(--primary-color)]":"stroke-[var(--primary-color-50)]"}`} />}
                />
            </Link>

            <Link href="/search">
                <IconButton
                    icon={<IoSearchOutline className={`w-6 h-6 ${path==="/search"?"stroke-[var(--primary-color)]":"stroke-[var(--primary-color-60)]"}`} />}
                />
            </Link>

            <Link href="/account">
                <IconButton
                    icon={<AiOutlineUser className={`w-6 h-6 ${path==="/account"?"fill-[var(--primary-color)]":"fill-[var(--primary-color-60)]"}`} />}
                />
            </Link>

        </div>
    )
}