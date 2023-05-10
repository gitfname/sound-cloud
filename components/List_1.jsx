"use client"

import { BsArrowRight } from "react-icons/bs"

function ListItem({icon, text, badge, link}) {
    return (
        <div className="w-full p-2.5 py-4 border-b border-b-gray-100 flex items-center justify-between">

            <div className="flex items-center">
                <div className="w-12 ">
                    {icon}
                </div>
                <p className="text-black/70 text-lg tracking-wide font-sans font-normal leading-none">{text}</p>
            </div>

            <div className="flex items-center gap-x-3">
                {
                    (typeof badge !== "undefined")&&(
                        <div className="px-1.5 rounded-sm bg-[var(--primary-color)]">
                            <span className="text-white text-xs text-[11px] leading-none">{badge}</span>
                        </div>
                    )
                    
                }
                <BsArrowRight className="w-5 h-5 fill-[var(--primary-color)]" />
            </div>

        </div>
    )
}

export default function List_1({items=[{icon, text, badge, link}]}) {
    return (
        <div className="w-full">
            {
                items.map(item => <ListItem key={item.key} {...item}/>)
            }
        </div>
    )
}