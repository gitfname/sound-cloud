"use client"

import HorizontalStck from "@/components/HorizontalStack";
import List_1 from "@/components/List_1";
import MusicCard_1 from "@/components/MusicCard_1";
import { Page } from "konsta/react";

import { AiOutlineHome, AiOutlineMail, AiOutlineSmile, AiTwotoneRest } from "react-icons/ai"

export default function page() {

    return (
        <Page className="pb-[65px] px-3 pt-5">

        {/* hots now */}
        <HorizontalStck
            titleCoolor="var(--primary-color)"
            title="Hots now"
            items={[
                {
                title: "music-1",
                subtitle: "hello world",
                img: {
                    w: 160,
                    h: 160,
                    src: "/img1.jpg"
                }
                },
                {
                title: "music-2",
                subtitle: "hello world",
                img: {
                    w: 160,
                    h: 160,
                    src: "/img2.jpg"
                }
                },
                {
                title: "music-3",
                subtitle: "hello world",
                img: {
                    w: 160,
                    h: 160,
                    src: "/img3.jpg"
                }
                },
                {
                title: "music-4",
                subtitle: "hello world",
                img: {
                    w: 160,
                    h: 160,
                    src: "/img4.jpg"
                }
                },
                {
                title: "music-5",
                subtitle: "hello world",
                img: {
                    w: 160,
                    h: 160,
                    src: "/img5.jpg"
                }
                }
            ]}
            renderer={(item) => <MusicCard_1 {...item} /> }
        />

        <p className="mt-12 text-xl text-black/80 font-sans font-medium tracking-wide">Recents</p>

        <div className="mt-4"></div>

        <List_1
            items={[
                {
                    key: 0,
                    badge: "new",
                    text: "hello world",
                    icon: <AiOutlineHome className="w-6 h-6 fill-[var(--primary-color)]" />
                },
                {
                    key: 1,
                    text: "hello world",
                    icon: <AiOutlineSmile className="w-6 h-6 fill-[var(--primary-color)]" />
                },
                {
                    key: 2,
                    badge: "131",
                    text: "hello world",
                    icon: <AiOutlineMail className="w-6 h-6 fill-[var(--primary-color)]" />
                },
                {
                    key: 3,
                    text: "hello world",
                    icon: <AiTwotoneRest className="w-6 h-6 fill-[var(--primary-color)]" />
                }
            ]}
        />

        </Page>
    )
}