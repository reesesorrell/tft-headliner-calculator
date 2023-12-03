import champ from "@/info/champions.json"

export default function ChampionSelector({level, champions, changeChampions}) {
    return (
        <div>{champ[0]["name"]}</div>
    )
}