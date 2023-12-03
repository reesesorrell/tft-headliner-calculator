'use client'
import { useState } from "react"
import LevelSelector from "@/components/LevelSelector";
import ChampionSelector from "@/components/ChampionSelector";
import Output from "@/components/Output";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [champions, setChampions] = useState([])
  const [run, setRun] = useState(false);

  function changeLevel(newLevel) {
    setLevel(newLevel);
  }

  function changeChampions(newChampions) {
    setChampions(newChampions);
  }

  return (
    <div>
      <div className="w-full flex justify-center items-center h-36 text-4xl font-bold">
        <div>TFT Headliner Rolldown Calculator</div>
      </div>
      <LevelSelector level={level} changeLevel={changeLevel}/>
      <ChampionSelector level={level} champions={champions} changeChampions={changeChampions}/>
      <button>Run Button</button>
      <Output />

    </div>
  )
}
