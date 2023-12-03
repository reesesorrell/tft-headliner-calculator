'use client'
import { useState } from "react"
import LevelSelector from "@/components/LevelSelector";
import ChampionSelector from "@/components/ChampionSelector";
import Output from "@/components/Output";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [champions, setChampions] = useState([])
  const [run, setRun] = useState(false);

  return (
    <div>
      <LevelSelector />
      <ChampionSelector />
      <button>Run Button</button>
      <Output />

    </div>
  )
}
