import championJSON from "@/info/champions.json"
import headlinerOdds from "@/info/headliner-odds.json"
import poolTotal from "@/info/pool-total.json"
import { useEffect, useState } from "react";

export default function Output({level, champions}) {

    //gets the odds object for the current level
    function getLevelOdds() {
        for (let i = 0; i < headlinerOdds.length; i++) {
            let currentLevel = headlinerOdds[i];
            if (currentLevel["level"] == level) {
                return currentLevel["odds"];
            }
        }
    }
    let currentOdds = getLevelOdds();

    //find the total odds of hitting on each roll
    function findOddsPerRoll() {
        let oddTotal = 0
        //go through each champion that is checked
        for (let i = 0; i < champions.length; i++) {
            let currentChamp = champions[i];
            let champArray = currentChamp.split(' ')
            let name = champArray[0]
            let trait = champArray.slice(1).join(" ")

            //find it in the json to get its cost so its odd can be calculated
            for (let j = 0; j < championJSON.length; j++) {
                if (championJSON[j]["name"] == name) {
                    let currentCost = championJSON[j]["cost"];
                    console.log(name);
                    let champOdd = currentOdds[currentCost] / poolTotal[currentCost];
                    let thisTraitOdd = champOdd / championJSON[j]["traits"].length
                    oddTotal += thisTraitOdd;
                    break;
                }
            }
        }

        return oddTotal
    }

    const [oddsPerRoll, setOddsPerRoll] = useState(0)

    useEffect(() => {
        setOddsPerRoll(findOddsPerRoll());
    }, [champions])

    //create an array that represents the percentage chance of hitting after i + 1 amount of rolls
    function generateOddsArray() {
        let chanceOfMissing = 1 - oddsPerRoll;
        let oddsArray = []
        for (let i = 0; i < 50; i++) {
            oddsArray.push(Math.round((1 - chanceOfMissing**i)*100)/100)
        }
        return oddsArray
    }
    
    if (oddsPerRoll > 0) {
        let oddsArray = generateOddsArray();
        
    }

    return (
        <div>{oddsPerRoll}</div>
    )
}