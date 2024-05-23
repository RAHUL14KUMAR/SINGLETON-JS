interface Game{
    id:string,
    whitePlayer:string,
    blackPlayer:string,
    moves:string[]
}

// export const games:Game[]=[];



// here we implement a singleton pattern and for implementing we need to thing static vairables and static methods and make it private for variable

// here why do we need to use singleton pattern because we need that gamechanger have only one instance of the class like now if commented out line number 51 then it will show error as it restrict to create instance of gamechanger more than 1 and we need to access it from anywhere in the application
export class GameManager{
    games:Game[]=[];
    private static instance:GameManager;
    private constructor(){
        this.games=[]
    }

    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
        GameManager.instance=new GameManager();
        return GameManager.instance;
    }

    addMove(gameId:string,move:string){
        console.log(`addming move ${move} to game ${gameId}`)

        const game=this.games.find(game=>game.id===gameId)

        game?.moves.push(move)
    }

    addGame(gameId:string){
        const game={
            id:gameId,
            whitePlayer:"white",
            blackPlayer:"black",
            moves:[]
        }
        this.games.push(game)
    }
}

export const gameManager=GameManager.getInstance();

// const a=new GameManager();