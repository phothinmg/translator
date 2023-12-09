"use client"
import { Translator } from "./translate"
import Image from "next/image"
export default function Home() {
  return (
      <>
      <form>
        <h1>Translator</h1>
         <Translator />
      </form>
        
      </>
  )
}
