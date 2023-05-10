"use client"

import HorizontalStck from "@/components/HorizontalStack";
import MusicCard_1 from "@/components/MusicCard_1";
import { Page, Navbar, Block, Button, BlockTitle, List, ListItem,
Actions, ActionsLabel, ActionsGroup, ActionsButton, Badge, Tabbar } from "konsta/react"
import { useState } from "react";

export default function Home() {

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

      {/* mood */}
      <div className="mt-8"></div>
      <HorizontalStck
        titleClass="!text-xl"
        title="Mood"
        titleCoolor="black"
        items={[
          {
            title: "music-1",
            subtitle: "hello world",
            img: {
              w: 240,
              h: 180,
              src: "/img1.jpg",
            }
          },
          {
            title: "music-2",
            subtitle: "hello world",
            img: {
              w: 240,
              h: 180,
              src: "/img2.jpg"
            }
          },
          {
            title: "music-3",
            subtitle: "hello world",
            img: {
              w: 240,
              h: 180,
              src: "/img3.jpg"
            }
          },
          {
            title: "music-4",
            subtitle: "hello world",
            img: {
              w: 240,
              h: 180,
              src: "/img4.jpg"
            }
          },
          {
            title: "music-5",
            subtitle: "hello world",
            img: {
              w: 240,
              h: 180,
              src: "/img5.jpg"
            }
          }
        ]}
        renderer={(item) => <MusicCard_1 {...item} /> }
      />


      <div className="mt-8"></div>
      {/* popular artists */}
      <HorizontalStck
        titleClass="!text-xl"
        title="Popular artists"
        titleCoolor="black"
        items={[
          {
            subtitle: "hello world and all guys",
            img: {
              w: 105,
              h: 105,
              src: "/img1.jpg",
            }
          },
          {
            subtitle: "hello world",
            img: {
              w: 105,
              h: 105,
              src: "/img2.jpg"
            }
          },
          {
            subtitle: "hello world",
            img: {
              w: 105,
              h: 105,
              src: "/img3.jpg"
            }
          },
          {
            subtitle: "hello world",
            img: {
              w: 105,
              h: 105,
              src: "/img4.jpg"
            }
          },
          {
            subtitle: "music-5",
            img: {
              w: 105,
              h: 105,
              src: "/img5.jpg"
            }
          }
        ]}
        renderer={(item) => <MusicCard_1 detailsWrapperClass="!mt-1" showTitle={false} {...item} /> }
      />

    </Page>
  )

}
