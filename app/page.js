"use client"

import HorizontalStck from "@/components/HorizontalStack";
import { Page, Navbar, Block, Button, BlockTitle, List, ListItem,
Actions, ActionsLabel, ActionsGroup, ActionsButton, Badge, Tabbar } from "konsta/react"
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Page className="pb-[65px]">
      <Navbar title="hello world" />
      <Block>hello world</Block>
      <Button onClick={() => setIsOpen(true)} className="touch-ripple-purple-500">hello world</Button>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem
          title="Home"
          after={<Badge className="rounded-sm" colors={{bg: "bg-yellow-400", text: "text-slate-800"}}>901</Badge>}
        />
        <ListItem
          title="Music"
          after={<Badge colors={{bg:"bg-sky-600"}}>New</Badge>}
        />
      </List>

      <div className="w-full border border-red-500 mt-64"></div>

      <Actions
        opened={isOpen}
        onBackdropClick={() => setIsOpen(false)}
        className="p-2"
      >
        <ActionsGroup>
          <ActionsLabel>hello world</ActionsLabel>
          <ActionsButton onClick={() => setIsOpen(false)}>
            button-1
          </ActionsButton>
          <ActionsButton onClick={() => setIsOpen(false)}>
            button-2
          </ActionsButton>
          <ActionsButton onClick={() => setIsOpen(false)}>
            button-3
          </ActionsButton>
        </ActionsGroup>
        <ActionsGroup className="pt-2 pb-2">
          <ActionsButton onClick={() => setIsOpen(false)}>
            cancel
          </ActionsButton>
        </ActionsGroup>
      </Actions>

      <HorizontalStck
        items={[
          1,2,3,4,5,6,7,8,9,10
        ]}
        renderer={(item) => <div className="w-32 h-20 bg-red-400">{item}</div>}
      />

    </Page>
    // <div className="w-full">

    //   <div className="w-full overflow-x-hidden border">
    //     <HorizontalStck/>  
    //   </div>

    // </div>
  )

}
