

export default function LevelSelector({level, changeLevel, changeChampions}) {

    const levels = [];
    for (let i = 1; i <= 10; i++) {
        levels.push(<button 
            className={`${(i == level) ? "bg-slate-100" : "bg-slate-400"} rounded-full w-14 h-14 text-black text-xl`} 
            key={"button" + i} 
            onClick={() => {
                changeLevel(i); 
                changeChampions([])}}>{i}
            </button>)
    }

    return (
        <div>
            <div className="w-full text-center text-2xl mb-6">Level Selector</div>
            <div className="w-3/4 mx-auto flex justify-around">
                {levels}
            </div>
        </div>
    )
}