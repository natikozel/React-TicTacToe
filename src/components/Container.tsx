import {PlayersMenu} from "./PlayersMenu";
import React from "react";
import {GameBoard} from "./GameBoard";
import {Log} from "./Log";

export interface GameBoardProps {
    curPlayer: PlayerSymbol,
    onSelect?: Function
}

export type PlayerSymbol = 'X' | 'O' | null

export const Container = (): React.JSX.Element => {

    const [curActivePlayer, setCurActivePlayer]
        : [PlayerSymbol, React.Dispatch<React.SetStateAction<PlayerSymbol>>]
        = React.useState('X' as PlayerSymbol);

    // const [gameTurns, setGameTurns] =
    const handleCurPlayer = (): void => {
        setCurActivePlayer((curPlayer: PlayerSymbol): PlayerSymbol => curPlayer === 'X' ? 'O' : 'X');
    };

    return (
        <div id="game-container">
            <PlayersMenu curPlayer={curActivePlayer}/>
            <GameBoard curPlayer={curActivePlayer} onSelect={handleCurPlayer}/>
            <Log/>
        </div>


    );
};