import {PlayersMenu} from "./PlayersMenu";
import React from "react";
import {GameBoard} from "./GameBoard";
import {Log} from "./Log";
import {WINNING_COMBINATIONS, WinningCombination} from "../winning_combinations";
import {GameOver} from "./GameOver";

export type PlayerSymbol = 'X' | 'O' | null

export interface SquareProps {
    rowIndex: number,
    colIndex: number
}

export interface Turn {
    square: SquareProps;
    player: PlayerSymbol;
}

export interface Players {
    X: string,
    O: string,
}

const INITIAL_PLAYERS: Players = {
    X: 'Player 1',
    O: 'Player 2'
};

const INITIAL_GAME_BOARD: PlayerSymbol[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


const deriveCurrentPlayer = (gameTurns: Turn[]) => {
    let currentPlayer: PlayerSymbol = 'X';

    if (gameTurns.length && gameTurns[0].player === 'X')
        currentPlayer = 'O';

    return currentPlayer;
};

const deriveWinner = (gameTurns: Turn[], gameBoard: PlayerSymbol[][], players: Players): string | null => {
    let winner: string | null = null;

    if (gameTurns.length === 9)
        winner = 'Draw';

    WINNING_COMBINATIONS.forEach((combination: WinningCombination): void => {
        const firstSquare: PlayerSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquare: PlayerSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquare: PlayerSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquare && secondSquare === firstSquare && thirdSquare === firstSquare)
            winner = players[firstSquare];
    });
    return winner;
};

const deriveGameBoard = (gameTurns: Turn[]): PlayerSymbol[][] => {
    let gameBoard: PlayerSymbol[][] = [...INITIAL_GAME_BOARD.map((array: PlayerSymbol[]) => [...array])];
    for (const turn of gameTurns)
        gameBoard[turn.square.rowIndex][turn.square.colIndex] = turn.player;
    return gameBoard;
};

export const Container = (): React.JSX.Element => {

    const [players, setPlayers]
        : [Players, React.Dispatch<React.SetStateAction<Players>>]
        = React.useState(INITIAL_PLAYERS);

    const [gameTurns, setGameTurns]
        : [Turn[], React.Dispatch<React.SetStateAction<Turn[]>>]
        = React.useState([] as Turn[]);

    const currentPlayer: PlayerSymbol = deriveCurrentPlayer(gameTurns);
    const gameBoard: PlayerSymbol[][] = deriveGameBoard(gameTurns);
    const winner: string | null = deriveWinner(gameTurns, gameBoard, players);

    const handleRestart = (): void => {
        setGameTurns([]);
    };
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

    const handleNameChange = (symbol: 'O' | 'X', newName: string): void => {
        setPlayers((prevPlayers: Players): Players => {
            return {
                ...prevPlayers,
                [symbol]: newName
            };
        });
    };

    return (
        <>
            <div id="game-container">
                <PlayersMenu onSave={handleNameChange} currentPlayer={currentPlayer}/>
                <GameBoard gameBoard={gameBoard} onSelect={handleCurPlayer}/>
                {winner ? <GameOver onRematch={handleRestart} winner={winner}/> : null}
            </div>
            <Log gameTurns={gameTurns}/>;
        </>
    );
};