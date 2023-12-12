import {PlayersMenu} from "./PlayersMenu";
import React from "react";
import {GameBoard} from "./GameBoard";
import {Log} from "./Log";
import {PlayerProps} from "./Player";

export type PlayerSymbol = 'X' | 'O' | null

export interface SquareProps {
    rowIndex: number,
    colIndex: number
}

export interface Turn {
    square: SquareProps;
    player: PlayerProps;
}

export const Container = (): React.JSX.Element => {

    const [allPlayers, setAllPlayers]
        : [Array<PlayerProps>, React.Dispatch<React.SetStateAction<PlayerProps[]>>]
        = React.useState([
        {
            name: "PLAYER1",
            symbol: 'X',
            isActive: true
        },
        {
            name: "PLAYER2",
            symbol: 'O',
            isActive: false
        }
    ] as PlayerProps[]);

    const [gameTurns, setGameTurns]
        : [Turn[], React.Dispatch<React.SetStateAction<Turn[]>>]
        = React.useState([] as Turn[]);


    const handleAllPlayers = (newPlayerName: string, symbol: PlayerSymbol): void => {
        const allNewPlayers: PlayerProps[] = [...allPlayers];
        let newPlayer: PlayerProps = allNewPlayers.find((p: PlayerProps): boolean => p.symbol === symbol)!;
        newPlayer.name = newPlayerName;
        setAllPlayers((allPlayers: Array<PlayerProps>): Array<PlayerProps> => allNewPlayers);
    };

    const handleCurPlayer = (rowIndex: number, colIndex: number): void => {

        let playerName: string;

        setAllPlayers((curAllPlayers: PlayerProps[]): PlayerProps[] => {
            let newAllPlayers: PlayerProps[] = [...curAllPlayers];
            let previousPlayer: PlayerProps = newAllPlayers.find((p: PlayerProps): boolean => p.isActive!)!;
            playerName = previousPlayer.name;
            newAllPlayers = newAllPlayers.map((p: PlayerProps) => {
                return {
                    name: p.name,
                    symbol: p.symbol,
                    isActive: !p.isActive
                };
            });
            return newAllPlayers;
        });

        setGameTurns((prevTurns: Turn[]): Turn[] => {

            let currentPlayerSymbol: PlayerSymbol = 'X';

            if (prevTurns.length && prevTurns[0].player.symbol === 'X')
                currentPlayerSymbol = 'O';

            return [
                {
                    square: {
                        rowIndex: rowIndex,
                        colIndex: colIndex
                    },
                    player: {
                        name: playerName,
                        symbol: currentPlayerSymbol,
                    },
                },
                ...prevTurns,
            ];
        });
    };

    return (
        <>
            <div id="game-container">
                <PlayersMenu allPlayers={allPlayers} updateAllPlayers={handleAllPlayers}/>
                <GameBoard curPlayer={allPlayers.find((p: PlayerProps) => p.isActive)!} onSelect={handleCurPlayer}/>
            </div>
            <Log gameTurns={gameTurns}/>;
        </>
    );
};