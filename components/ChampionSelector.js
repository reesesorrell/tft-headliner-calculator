import championJSON from "@/info/champions.json"
import headlinerOdds from "@/info/headliner-odds.json"

export default function ChampionSelector({level, champions, changeChampions, setRun}) {

    //get list of costs of the champs that appear as headliners at that level
    let champCosts = []
    for (var index in headlinerOdds) {
        if (headlinerOdds[index]["level"] == level) {
            for (var cost in headlinerOdds[index]["odds"]) {
                champCosts.push(cost)
            }
        }
    }

    //handle a change in the checkbox
    function handleChange(e) {
        const name = e.target.name;
        const checked = e.target.checked;
        let copy = champions;
        if (checked) {
            copy.push(name)
            changeChampions(copy)
        }
        else {
            const index = copy.indexOf(name);
            if (index >= 0) {
                copy.splice(index, 1);
                changeChampions(copy);
            }
        }
        console.log(champions);
    }
    
    //make a list of inputs from the characters of those costs
    let championList = []
    for (var costIndex in champCosts) {
        let champListOfSameCost = []
        for (var index in championJSON) {
            if (championJSON[index]["cost"] == champCosts[costIndex]) {
                let name = championJSON[index]["name"]
                let traits = championJSON[index]["traits"]
                let traitsListInput = []
                for (var index in traits) {
                    traitsListInput.push(
                        <label className="text-slate-300 ml-4" key={traits[index]}>
                            <div className="inline mr-2">{traits[index]}</div>
                            <input 
                            type="checkbox" 
                            name={`${name} ${traits[index]}`} 
                            id={`${name} ${traits[index]}`} 
                            onChange={handleChange} />
                        </label>
                    )
                }
                champListOfSameCost.push(
                    <div className="flex flex-col w-36 gap-y-1" key={name}>
                        <div className="text-xl">{name}</div>
                        {traitsListInput}
                    </div>
                )
            }
        }
        let champCostDiv = <div className="w-full text-center text-xl mb-6 mt-8">{champCosts[costIndex]} Costs: </div>
        let champListDiv = <div className="grid grid-cols-6 justify-items-center gap-y-6">{champListOfSameCost}</div>
        championList.push(<div key={costIndex}>{[champCostDiv, champListDiv]}</div>)
    }

    //handle submission of form
    function handleSubmit(e) {
        setRun(true);
        e.preventDefault();
    }

    return (
        <div className={`${level ? "visible" : "hidden"}`}>
            <div className="w-full text-center text-2xl mt-12">Champion Selector</div>
            <form onSubmit={handleSubmit}>
                {championList}
                <div className="flex justify-center">
                    <input className="px-4 py-2 border mt-8" type="submit" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    )
}