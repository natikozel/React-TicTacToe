import {PlayersMenu} from "./PlayersMenu";
import React from "react";
import {GameBoard} from "./GameBoard";
import {Log} from "./Log";

export type PlayerSymbol = 'X' | 'O' | null

export interface SquareProps {
    rowIndex: number,
    colIndex: number
}

export interface Turn {
    square: SquareProps;
    player: PlayerSymbol;
}

const deriveCurrentPlayer = (gameTurns: Turn[]) => {
    let currentPlayer: PlayerSymbol = 'X';

    if (gameTurns.length && gameTurns[0].player === 'X')
        currentPlayer = 'O';

    return currentPlayer;
};

export const Container = (): React.JSX.Element => {

    const [gameTurns, setGameTurns]
        : [Turn[], React.Dispatch<React.SetStateAction<Turn[]>>]
        = React.useState([] as Turn[]);


    const handleCurPlayer = (rowIndex: number, colIndex: number): void => {

        setGameTurns((prevTurns: Turn[]): Turn[] => {

            let currentPlayer: PlayerSymbol = deriveCurrentPlayer(gameTurns);

            return [
                {
                    square: {
                        rowIndex: rowIndex,
                        colIndex: colIndex
                    },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
        });
    };

    return (
        <>
            <div id="game-container">
                <PlayersMenu currentPlayer={deriveCurrentPlayer(gameTurns)}/>
                <GameBoard currentPlayer={deriveCurrentPlayer(gameTurns)} onSelect={handleCurPlayer}/>
            </div>
            <Log gameTurns={gameTurns}/>;
        </>
    );
};