import React from "react";
import {GameBoardArray} from "./GameBoardArray";
import {PlayerSymbol} from "./Container";

export interface GameBoardProps {
    currentPlayer: PlayerSymbol,
    onSelect: Function
}

export const GameBoard = ({currentPlayer, onSelect} : GameBoardProps) => {

    return (
        <ol id="game-board">
            <GameBoardArray onSelect={onSelect} currentPlayer={currentPlayer}/>
        </ol>
    );
};