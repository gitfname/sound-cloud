"use client"

import { App, Tabbar } from "konsta/react"
import BottomNavigatoin from "./BottomNavigation"

export default function KonstaWrapper({children}) {
    return (
        <App safeAreas dark={false}>
            {children}
            <Tabbar className="fixed bottom-0 left-0 bg-white h-[55px] grid place-items-center" bgClassName="bg-white">
                <BottomNavigatoin />
            </Tabbar>
        </App>
    )
}