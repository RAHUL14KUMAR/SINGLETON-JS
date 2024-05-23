import { gameManager } from "./store"

// import { games } from "./store";

export function startLogger(){
    setInterval(()=>{
        console.log(gameManager.games)
    },4000)
}